import db from '../database';
import { Product } from '../models/product.model';
import { DatabaseError } from './../errors/database.error';

class ProductRepository {

    async create(category: Product): Promise<string> {
        try {
            const script = `
                INSERT INTO application_categories (
                    category,
                    category_name,
                    category_image,
                )
                VALUES ($1, $2, $3))
                RETURNING category
            `;

            const values = [category.category, category.name, category.image];
            const queryResult = await db.query<{ category: string }>(script, values);

            const [row] = queryResult.rows;
            return row.category;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao inserir categoria', data: error });
        }
    }

    async update(category: Product): Promise<void> {
        try {
            const script = `
                UPDATE application_categories
                SET
                    category_name = $2,
                    category_image = $3
                WHERE category = $1
            `;

            const values = [category.category, category.name, category.image];
            await db.query(script, values);
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao atualizar categoria', data: error });
        }
    }

    async remove(category: string): Promise<void> {
        try {
            const script = `
                DELETE 
                FROM application_categories
                WHERE category = $1
            `;

            const values = [category];
            await db.query(script, values);
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao deletar categoria', data: error });
        }
    }

    async findById(id: string): Promise<Product | null> {
        try {
            const query = `
                SELECT 
                    category, 
                    category_name,
                    category_image
                FROM application_categories
                WHERE category = $1
            `;
            const queryResult = await db.query<Product>(query, [id]);
            const [row] = queryResult.rows;
            return !row ? null : row;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar categoria', data: error });
        }
    }

    async findByName(name: string): Promise<Product | null> {
        try {
            const query = `
                SELECT 
                    category, 
                    category_name,
                    category_image
                FROM application_categories
                WHERE category_name = $1
            `;
            const queryResult = await db.query(query, [name]);
            const [row] = queryResult.rows;
            return !row ? null : row;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar categoria pelo nome', data: error });
        }
    }

}

export default new ProductRepository();
