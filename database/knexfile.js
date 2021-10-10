
const config ={
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: 'Corsar2412#',
            database: 'Wise'
        },
        migrations: {
            directory: './migrations',
            loadExtensions: ['.js']
        }
    }
};
export default config;