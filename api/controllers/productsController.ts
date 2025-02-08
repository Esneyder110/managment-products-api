import { type NextFunction, type Request, type Response } from "express";

import { prisma } from "../services/db/prisma";
import {
  CreateProductSchema,
  GetBySearchTermSchema,
  UpdateProductSchema,
} from "../schemas/productsModels";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { q: searchterm } = GetBySearchTermSchema.parse(req.query);

    let whereClause = {};

    if (searchterm) {
      whereClause = {
        OR: [
          {
            name: {
              contains: searchterm,
              mode: "insensitive",
            },
          },
          {
            category: {
              contains: searchterm,
              mode: "insensitive",
            },
          },
        ],
      };
    }

    const products = await prisma.product.findMany({
      where: whereClause,
    });

    res.json({ data: products });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = CreateProductSchema.parse(req.body);

    const product = await prisma.product.create({
      data: {...data,},
    });

    res.status(201).json({ data: product });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id, ...data } = UpdateProductSchema.parse({
      id: req.params.id,
      ...req.body,
    });

    const product = await prisma.product.update({
      where: { id },
      data,
    });

    res.json({ data: product });
  } catch (error) {
    next(error);
  }
};
