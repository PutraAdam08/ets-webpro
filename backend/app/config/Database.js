import { Sequelize } from "sequelize";
 
const db = new Sequelize('ets', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;