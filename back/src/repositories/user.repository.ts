import config from 'config';
import db from '../database';
import { User } from '../models/user.model';
import { DatabaseError } from './../errors/database.error';

const authenticationCryptKey = config.get<string>('authentication.cryptKey');

class UserRepository {

    async create(user: User): Promise<string> {
        try {
            const script = `
                INSERT INTO application_user (
                    username, 
                    password,
                    email,
                    age,
                    gender,
                    location
                ) 
                VALUES ($1, crypt($2, '${authenticationCryptKey}'), $3, $4, $5, $6) 
                RETURNING id
            `;

            const values = [user.username, user.password, user.email, user.age, user.gender, user.location];
            const queryResult = await db.query<{ id: string }>(script, values);

            const [row] = queryResult.rows;
            return row.id;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao inserir usuário', data: error });
        }
    }

    async update(user: User): Promise<void> {
        try {
            const script = `
                UPDATE application_user
                SET
                    username = $2,
                    password = crypt($3, '${authenticationCryptKey}'),
                    email = $4,
                    age = $5,
                    gender = $6,
                    location = $7
                WHERE id = $1            
            `;

            const values = [user.id, user.username, user.password, user.email, user.age, user.gender, user.location];
            await db.query(script, values);
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao atualizar usuário', data: error });
        }
    }

    async remove(id: string): Promise<void> {
        try {
            const script = `
                DELETE 
                FROM application_user 
                WHERE id = $1
            `;

            const values = [id];
            await db.query(script, values);
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao deletar usuário', data: error });
        }
    }

    async findByid(id: string): Promise<User | null> {
        try {
            const query = `
                SELECT 
                    id, 
                    username,
                    email,
                    age,
                    gender,
                    location
                FROM application_user
                WHERE id = $1
            `;
            const queryResult = await db.query<User>(query, [id]);
            const [row] = queryResult.rows;
            return !row ? null : row;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar usuário por id', data: error });
        }
    }

    async findByUsernameAndPassword(email: string, password: string): Promise<User | null> {
        try {
            const query = `
                SELECT 
                    id, 
                    username,
                    email,
                    age,
                    gender,
                    location
                FROM application_user
                WHERE email = $1
                AND password = crypt($2, '${authenticationCryptKey}')
            `;
            const queryResult = await db.query(query, [email, password]);
            const [row] = queryResult.rows;
            return !row ? null : row;
        } catch (error) {
            throw new DatabaseError({ log: 'Erro ao buscar usuário por username e password', data: error });
        }
    }

    async findByEmail(email: string): Promise<User | null> {
        try {
            const query = `
                SELECT 
                    email
                FROM application_user
                WHERE email = $1
            `;
            const queryResult = await db.query(query, [email]);
            const [row] = queryResult.rows;
            return !row ? null : row;
        } catch (error) {
            throw new DatabaseError({ log: 'Usúario não encontrado', data: error });
        }
    }
}

export default new UserRepository();