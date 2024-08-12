import dotenv from 'dotenv'

let cfg = dotenv.config({ path: `.env.${process.env.NODE_ENV || 'dev'}` }).parsed;

module.exports = {
   dev: {
      dialect: "postgres",
      host: cfg.DB_HOST,
      port: cfg.DB_PORT,
      username: cfg.DB_USERNAME,
      password: cfg.DB_PASSWORD,
      database: cfg.DB_NAME,
   },
   test: {
      dialect: "postgres",
      host: cfg.DB_HOST,
      port: cfg.DB_PORT,
      username: cfg.DB_USERNAME,
      password: cfg.DB_PASSWORD,
      database: cfg.DB_NAME,
   },
   production: {
      dialect: "postgres",
      host: cfg.DB_HOST,
      port: cfg.DB_PORT,
      username: cfg.DB_USERNAME,
      password: cfg.DB_PASSWORD,
      database: cfg.DB_NAME,
   },
}