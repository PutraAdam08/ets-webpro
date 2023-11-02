
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const User = db.define('users',{
      Name: {
    type: Sequelize.STRING(36),
    allowNull:false,
  },
  Email: {
    type: Sequelize.STRING(36),
    primaryKey:true,
    allowNull:false
  },
  Password: {
    type: Sequelize.STRING(8),
    allowNull:false
  },
  refresh_token:{
    type: DataTypes.TEXT
  }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default User;