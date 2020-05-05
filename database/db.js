const mysql = require('promise-mysql')

exports.createPool = async function () {

  let dbPool
  if (!dbPool) {
    dbPool = await mysql.createPool({
      connectionLimit: 30,
      acquireTimeout: 100000,
      port: 3306,
      host: process.env.db_host,
      user: process.env.db_user,
      password: process.env.db_password,
      database: 'facebook_data',
      ssl: true,
      debug: false,
      charset: "utf8mb4",
      trace: false,
      supportBigNumbers: true

    }).catch(error => console.log(error))

  }
  return dbPool
}


