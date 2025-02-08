import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, { message: "Invalid id." }),
  name: z.string().min(1),
  price: z.number().min(0),
  category: z.string().min(1),
  quantity: z.number().min(0),
  description: z.string().min(1),
});

export const GetOneProductSchema = ProductSchema.pick({ id: true });
export const DeleteProductSchema = ProductSchema.pick({ id: true });
export const CreateProductSchema = ProductSchema.omit({ id: true });
export const UpdateProductSchema = ProductSchema.partial();
export const GetBySearchTermSchema = z.object({
  q: z.string().optional(),
})
