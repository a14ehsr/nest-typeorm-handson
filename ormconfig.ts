module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'testuser',
    password: 'password',
    database: 'testdb',
    entities: ['src/**/*.entity.ts'],
    migrations: ['db/migrations/*.ts'],
    synchronize: false,
    cli: {
        migrationsDir: 'db/migrations'
    }
}