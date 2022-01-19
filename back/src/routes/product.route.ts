import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { Product } from '../models/product.model';
import ProductRepository from '../repositories/product.repository';

const route = Router();

route.get('/:id', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const product: Product | null = await ProductRepository.findById(id);

        if (!product) {
            return res.sendStatus(StatusCodes.NO_CONTENT);
        }

        return res.status(StatusCodes.OK).json(product);
    } catch (error) {
        return next(error);
    }
});

route.get('/search/:name', async (req: Request<{ name: string }>, res: Response, next: NextFunction) => {
    try {
        const name = req.params.name;
        const product: Product | null = await ProductRepository.findByName(name);

        if (!product) {
            return res.sendStatus(StatusCodes.NO_CONTENT);
        }

        return res.status(StatusCodes.OK).json(product);
    } catch (error) {
        return next(error);
    }
});

route.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productCreate: Product = req.body;
        const product = await ProductRepository.create(productCreate);
        return res.status(StatusCodes.CREATED).json(product);
    } catch (error) {
        return next(error);
    }
});

route.put('/:id', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const product: Product = req.body;
        const updatedProduct = await ProductRepository.update(product);
        return res.status(StatusCodes.OK).json(updatedProduct);
    } catch (error) {
        return next(error);
    }
});

route.delete('/:id', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        await ProductRepository.remove(id);
        return res.sendStatus(StatusCodes.OK);
    } catch (error) {
        return next(error);
    }
});

export default route;
