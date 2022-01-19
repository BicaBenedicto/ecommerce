import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { Comment } from '../models/comment.model';
import CommentRepository from '../repositories/comment.repository';

const route = Router();

route.get('/:product_id', async (req: Request<{ product_id: string }>, res: Response, next: NextFunction) => {
    try {
        const id = req.params.product_id;
        const product: Comment | null = await CommentRepository.findByProductId(id);

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
        const commentCreate: Comment = req.body;
        const comment = await CommentRepository.create(commentCreate);
        return res.status(StatusCodes.CREATED).json(comment);
    } catch (error) {
        return next(error);
    }
});

route.delete('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const comment = req.body;
        await CommentRepository.remove(comment);
        return res.sendStatus(StatusCodes.OK);
    } catch (error) {
        return next(error);
    }
});

export default route;
