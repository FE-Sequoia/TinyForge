module.exports = {
  port: 3000,
  db: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'saas_db'
    },
    pool: { min: 0, max: 7 }
  }
};
