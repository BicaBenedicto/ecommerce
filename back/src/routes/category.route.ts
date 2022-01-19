import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { Category } from '../models/category.model';
import CategoryRepository from '../repositories/category.repository';

const route = Router();

route.get('/:category', async (req: Request<{ category: string }>, res: Response, next: NextFunction) => {
    try {
        const categoryGet = req.params.category;
        const category: Category | null = await CategoryRepository.findByCategory(categoryGet);

        if (!category) {
            return res.sendStatus(StatusCodes.NO_CONTENT);
        }

        return res.status(StatusCodes.OK).json(category);
    } catch (error) {
        return next(error);
    }
});

route.get('/search/:name', async (req: Request<{ name: string }>, res: Response, next: NextFunction) => {
    try {
        const categoryGet = req.params.name;
        const category: Category | null = await CategoryRepository.findByName(categoryGet);

        if (!category) {
            return res.sendStatus(StatusCodes.NO_CONTENT);
        }

        return res.status(StatusCodes.OK).json(category);
    } catch (error) {
        return next(error);
    }
});

route.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categoryCreate: Category = req.body;
        const category = await CategoryRepository.create(categoryCreate);
        return res.status(StatusCodes.CREATED).json(category);
    } catch (error) {
        return next(error);
    }
});

route.put('/:category', async (req: Request<{ category: string }>, res: Response, next: NextFunction) => {
    try {
        const categoryUpdate = req.params.category;
        const category: Category = req.body;
        category.category = categoryUpdate;
        await CategoryRepository.update(categoryUpdate, category);
        return res.sendStatus(StatusCodes.OK);
    } catch (error) {
        return next(error);
    }
});

route.delete('/:category', async (req: Request<{ category: string }>, res: Response, next: NextFunction) => {
    try {
        const category = req.params.category;
        await CategoryRepository.remove(category);
        return res.sendStatus(StatusCodes.OK);
    } catch (error) {
        return next(error);
    }
});

export default route;
