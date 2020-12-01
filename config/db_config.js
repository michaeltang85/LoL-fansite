//configure postgreSQL database and sequelize

/*  max-> maximum number of connection in pool
    min-> minimum number of connection in pool
    idle-> maximum time, in msec that a connection can be idle
    acquire->maximum time, in msec, that pool will try to get connection
*/
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "123",
    DB: "testdb",
    dialect: "postgres",
    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};