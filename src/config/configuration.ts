export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.MONGODB_HOST,
    port: parseInt(process.env.MONGODB_PORT, 10) || 27017,
    dbname: process.env.MONGODB_DBNAME,
  },
});
