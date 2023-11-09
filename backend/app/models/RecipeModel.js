import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;


    const Recipe = db.define("recipes", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
            },
        Name: {
            type: Sequelize.STRING(36),
            allowNull:false,
            },
        Ingridient: {
            type: Sequelize.TEXT,
            allowNull:false,
            },
        Step: {
            type: Sequelize.TEXT,
            allowNull:false,
            },
        RecipeKind: {
            type: Sequelize.STRING(8),
            allowNull:false
            },
        UserEmail: {
            type: Sequelize.STRING(36),
            allowNull:false,
            reference:{
                model:'users',
                key:'Email'
            }
        },
        image: DataTypes.STRING,
        url: DataTypes.STRING
    });
    (async () => {
            await db.sync();
    })();
  
    export default Recipe;