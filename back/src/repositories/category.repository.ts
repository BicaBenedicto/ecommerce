import db from '../database';
import { Category } from '../models/category.model';
import { DatabaseError } from './../errors/database.error';

class CategoryRepository {

    async create(category: Category): Promise<string> {
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

            const values = [category.category, category.category_name, category.category_image];
            const queryResult = await db.query<{ category: string }>(script, values);

            const [row] = queryResult.rows;
            return row.category;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao inserir categoria', data: error });
        }
    }

    async update(category: Category): Promise<void> {
        try {
            const script = `
                UPDATE application_categories
                SET
                    category_name = $2,
                    category_image = $3
                WHERE category = $1
            `;

            const values = [category.category, category.category_name, category.category_image];
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

    async findByCategory(category: string): Promise<Category | null> {
        try {
            const query = `
                SELECT 
                    category, 
                    category_name,
                    category_image
                FROM application_categories
                WHERE category = $1
            `;
            const queryResult = await db.query<Category>(query, [category]);
            const [row] = queryResult.rows;
            return !row ? null : row;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar categoria', data: error });
        }
    }

    async findByName(name: string): Promise<Category | null> {
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

export default new CategoryRepository();
