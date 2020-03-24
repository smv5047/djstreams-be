// Update with your config settings.

const pg = {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        directory: "./data/migrations"
    },
    seeds: {
        directory: "./data/seeds"
    }
}

module.exports = {
    development: {
        ...pg,
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB,
            user: process.env.USER,
            password: process.env.PASSWORD
        }
    },

    production: pg
}
