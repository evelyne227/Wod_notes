import * as mysql from 'promise-mysql';

export function connect()
{
    return mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'wod_notes',
        port: 8889
    });
};