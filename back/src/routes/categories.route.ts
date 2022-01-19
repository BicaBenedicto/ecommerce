import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';
import CategoriesRepository from '../repositories/categories.repository';

const route = Router();

route.get('/', async (req: Request<{ category: string }>, res: Response, next: NextFunction) => {
    try {
        const category = await CategoriesRepository.getAllCategories();

        if (!category) {
            return res.sendStatus(StatusCodes.NO_CONTENT);
        }

        return res.status(StatusCodes.OK).json(category);
    } catch (error) {
        return next(error);
    }
});

route.delete('/', async (req: Request<{ category: string }>, res: Response, next: NextFunction) => {
    try {
        const category = req.params.category;
        await CategoriesRepository.removeAllCategories();
        return res.sendStatus(StatusCodes.OK);
    } catch (error) {
        return next(error);
    }
});

export default route;
