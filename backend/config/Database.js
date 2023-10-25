import { Sequelize } from "sequelize";
 
const db = new Sequelize('databaseets', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;