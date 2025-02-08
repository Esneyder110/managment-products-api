import { type Express, Router } from 'express'

import products from './productsRouter'

export const apiRouter = (app: Express): void => {
  const apiv1 = Router()
  apiv1.use('/products', products)
  app.use('/api/v1', apiv1)
}
