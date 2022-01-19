import express, { Request, Response } from 'express';
import db from './database';
import errorHanddlerMiddleware from './middlewares/error-handdles.middleware';
import authenticationRoute from './routes/authentication.route';
import userRoute from './routes/user.route';
import categoryRoute from './routes/category.route';
import categoriesRoute from './routes/categories.route';
import productRoute from './routes/product.route';
import productsRoute from './routes/products.route';
import commentRoute from './routes/comment.route';
const cors = require('cors');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/product/comment', cors(corsOptions), commentRoute);
app.use('/products', cors(corsOptions), productsRoute);
app.use('/product', productRoute);
app.use('/category', cors(corsOptions), categoryRoute);
app.use('/categories', cors(corsOptions), categoriesRoute);
app.use('/authentication', cors(corsOptions), authenticationRoute);
app.use('/user', cors(corsOptions), userRoute);

app.use(errorHanddlerMiddleware);

app.use('/', (req: Request, res: Response) => {
    res.json({ message: 'ok' });
});

const server = app.listen(4000, () => {
    console.log('listem on 4000!');
});

process.on('SIGTERM', () => {
    db.end(() => {
        console.log('database connection closed!')
    });
    server.close(() => {
        console.log('server on 4000 closed!');
    });
})
