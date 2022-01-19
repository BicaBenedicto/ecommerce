import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { User } from '../models/user.model';
import userRepository from '../repositories/user.repository';

const route = Router();

route.get('/:id', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const user: User | null = await userRepository.findByid(id);

        if (!user) {
            return res.sendStatus(StatusCodes.NO_CONTENT);
        }

        return res.status(StatusCodes.OK).json(user);
    } catch (error) {
        return next(error);
    }
});

route.get('/:email', async (req: Request<{ email: string }>, res: Response, next: NextFunction) => {
    try {
        const email = req.params.email;
        const user: User | null = await userRepository.findByEmail(email);

        if (!user) {
            return res.sendStatus(StatusCodes.NO_CONTENT);
        }

        return res.status(StatusCodes.OK).json('E-mail já utilizado');
    } catch (error) {
        return next(error);
    }
});

route.get('/:email/:password', async (req: Request<{ email: string, password: string }>, res: Response, next: NextFunction) => {
    try {
        const email = req.params.email;
        const password = req.params.password;
        const user = await userRepository.findByUsernameAndPassword(email, password);
        return res.status(StatusCodes.OK).json(user);
    } catch (error) {
        return next(error);
    }
});

route.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: User = req.body;
        const id = await userRepository.create(user);
        return res.status(StatusCodes.CREATED).json({ id });
    } catch (error) {
        return next(error);
    }
});

route.put('/:id', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const user: User = req.body;
        user.id = id;
        const updatedUser = await userRepository.update(user);
        return res.status(StatusCodes.OK).json(updatedUser);
    } catch (error) {
        return next(error);
    }
});

route.delete('/:id', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        await userRepository.remove(id);
        return res.sendStatus(StatusCodes.OK);
    } catch (error) {
        return next(error);
    }
});

export default route;