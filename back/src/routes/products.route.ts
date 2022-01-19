import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';
import ProductsRepository from '../repositories/products.repository';

const route = Router();

route.get('/', async (req: Request<{ category: string }>, res: Response, next: NextFunction) => {
    try {
        const category = await ProductsRepository.getAllProducts();

        if (!category) {
            return res.sendStatus(StatusCodes.NO_CONTENT);
        }

        return res.status(StatusCodes.OK).json(category);
    } catch (error) {
        return next(error);
    }
});

route.get('/:category', async (req: Request<{ category: string }>, res: Response, next: NextFunction) => {
  try {
      const category = req.params.category;
      const products = await ProductsRepository.findByCategory(category);

      if (!products) {
          return res.sendStatus(StatusCodes.NO_CONTENT);
      }

      return res.status(StatusCodes.OK).json(products);
  } catch (error) {
      return next(error);
  }
});

route.delete('/:category', async (req: Request<{ category: string }>, res: Response, next: NextFunction) => {
    try {
        const category = req.params.category;
        await ProductsRepository.removeCategoryAllProducts(category);
        return res.sendStatus(StatusCodes.OK);
    } catch (error) {
        return next(error);
    }
});

export default route;
