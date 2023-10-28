const sequelize = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipes", {
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
            type: Sequelize.STRING(36),
            allowNull:false,
            },        
        RecipeKind: {
            type: Sequelize.STRING(6),
            allowNull:false
            }

    });
  
    return Recipe;
  };