import db from '../database';
import { Comment } from '../models/comment.model';
import { DatabaseError } from './../errors/database.error';

class CommentRepository {

    async create(comment: Comment): Promise<string> {
        try {
            const script = `
                INSERT INTO application_comments (
                    comment,
                    username,
                    username_id,
                    product_id,
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7)
            `;

            const values = [comment.comment, comment.username, comment.username_id,
                comment.product_id];
            const queryResult = await db.query<{ id: string }>(script, values);

            const [row] = queryResult.rows;
            return row.id;
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

    async findByProductId(id: string): Promise<Comment | null> {
        try {
            const query = `
                SELECT 
                    comment,
                    username,
                    username_id,
                    product_id,
                FROM application_comments
                WHERE product_id = $1
            `;
            const queryResult = await db.query<Comment>(query, [id]);
            const [row] = queryResult.rows;
            return !row ? null : row;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar comentário', data: error });
        }
    }
}

export default new CommentRepository();
