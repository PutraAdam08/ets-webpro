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
            type: sequelize.STRING(36),
            allowNull:false,
            reference:{
                model:'users',
                key:'Email'
            }
        }

    });
  
    return Recipe;
  };