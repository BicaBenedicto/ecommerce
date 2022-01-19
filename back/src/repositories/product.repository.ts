import db from '../database';
import { Product } from '../models/product.model';
import { DatabaseError } from './../errors/database.error';

class ProductRepository {

    async create(product: Product): Promise<string> {
        try {
            const script = `
                INSERT INTO application_products (
                    id,
                    price,
                    item_name,
                    item_image,
                    item_likes,
                    item_unlikes,
                    category,
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                RETURNING id;
            `;

            const values = [product.id, product.price, product.item_name,
                product.item_image, product.likes, product.unlikes, product.category];
            const queryResult = await db.query<{ id: string }>(script, values);

            const [row] = queryResult.rows;
            return row.id;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao inserir produto', data: error });
        }
    }

    async update(product: Product): Promise<void> {
        try {
            const script = `
                UPDATE application_products
                SET
                    price = $2,
                    item_name = $3,
                    item_image = $4,
                    item_likes = $5,
                    item_unlikes = $6,
                    category = $7,
                WHERE id = $1;
            `;

            const values = [product.id, product.price, product.item_name,
                product.item_image, product.likes, product.unlikes, product.category];
            await db.query(script, values);
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao atualizar produto', data: error });
        }
    }

    async remove(id: string): Promise<void> {
        try {
            const script = `
                DELETE 
                FROM application_products
                WHERE id = $1;
            `;

            const values = [id];
            await db.query(script, values);
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao deletar produto', data: error });
        }
    }

    async findById(id: string): Promise<Product | null> {
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
                WHERE id = $1
            `;
            const queryResult = await db.query<Product>(query, [id]);
            const [row] = queryResult.rows;
            return row;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar produto', data: error });
        }
    }

    async findByName(name: string): Promise<Product | null> {
        try {
            const query = `
                SELECT 
                    id,
                    price,
                    item_name,
                    item_image,
                    item_likes,
                    item_unlikes,
                    category,
                FROM application_products
                WHERE item_name = $1;
            `;
            const queryResult = await db.query(query, [name]);
            const [row] = queryResult.rows;
            return !row ? null : row;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar produto pelo nome', data: error });
        }
    }

}

export default new ProductRepository();
