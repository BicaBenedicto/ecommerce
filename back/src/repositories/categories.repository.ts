import db from '../database';
import { Categories } from '../models/categories.model';
import { DatabaseError } from './../errors/database.error';

class AllCategoriesRepository {

    async removeAllCategories(): Promise<void> {
        try {
            const script = `
                DELETE 
                FROM application_categories
            `;

            await db.query(script);
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao deletar todas as categorias', data: error });
        }
    }

    async getAllCategories(): Promise<Categories | null> {
        try {
            const query = `
                SELECT 
                    category, 
                    category_name,
                    category_image
                FROM application_categories
            `;
            const queryResult = await db.query<any>(query);
            return queryResult.rows;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar todas as categorias', data: error });
        }
    }

}

export default new AllCategoriesRepository();
