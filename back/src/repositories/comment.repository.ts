import db from '../database';
import { Comment } from '../models/comment.model';
import { DatabaseError } from './../errors/database.error';

class CommentRepository {

    async create(comment: Comment): Promise<any> {
        try {
            const script = `
                INSERT INTO application_comments (
                    comment,
                    username,
                    username_id,
                    product_id
                )
                VALUES ($1, $2, $3, $4);
            `;

            const values = [comment.comment, comment.username, comment.username_id,
                comment.product_id];
            
            await db.query<any>(script, values);
            const queryResult = await this.findByProductId(comment.product_id.toString());

            return queryResult;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao inserir comentário', data: error });
        }
    }

    async remove(comment: Comment): Promise<void> {
        try {
            const script = `
                DELETE 
                FROM application_comments
                WHERE product_id = $1
                AND
                WHERE username_id = $2
                AND
                WHERE comment = $3
            `;

            const values = [comment.product_id, comment.username_id, comment.comment];
            await db.query(script, values);
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao deletar comentário', data: error });
        }
    }

    async removeById(id: string): Promise<void> {
        try {
            const script = `
                DELETE 
                FROM application_comments
                WHERE product_id = $1
            `;

            await db.query(script, [id]);
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao deletar comentário', data: error });
        }
    }

    async findByProductId(id: string): Promise<any | null> {
        try {
            const query = `
                SELECT 
                    comment,
                    username,
                    username_id,
                    product_id
                FROM application_comments
                WHERE product_id = $1
            `;
            const queryResult = await db.query<any>(query, [id]);
            const row = queryResult.rows;
            return row;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar comentário', data: error });
        }
    }
}

export default new CommentRepository();
