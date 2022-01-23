import { Products } from 'models/products.model';
import db from '../database';
import { DatabaseError } from './../errors/database.error';
import commentRepository from './comment.repository';

class ProductsRepository {
    async removeCategoryAllProducts(category: string): Promise<void> {
        try {
            const script = `
                DELETE 
                FROM application_products
                WHERE category = $1;
            `;

            const values = [category];
            const products = await this.findByCategory(category);
            products.forEach(async (product: any) => {
                await commentRepository.removeById(product.id);
            })
            await db.query(script, values);
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao deletar produto', data: error });
        }
    }

    async findByCategory(category: string): Promise<Products | null> {
        try {
            const query = `
                SELECT
                    id,
                    price,
                    item_name,
                    item_image,
                    item_likes,
                    item_unlikes,
                    category
                FROM application_products
                WHERE category = $1;
            `;

            const queryResult = await db.query<Products>(query, [category]);
            return queryResult.rows;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar produto', data: error });
        }
    }

    async getAllProducts(): Promise<Products | null> {
        try {
            const query = `
                SELECT
                    id,
                    price,
                    item_name,
                    item_image,
                    item_likes,
                    item_unlikes,
                    category
                FROM application_products;
            `;
            const queryResult = await db.query<any>(query);
            const row = queryResult.rows;
            return row;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar produto pelo nome', data: error });
        }
    }

}

export default new ProductsRepository();
