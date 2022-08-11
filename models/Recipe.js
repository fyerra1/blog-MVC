const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        ingredients: {
            type: DataTypes.TEXT, 
        },
        instructions:{
            type: DataTypes.TEXT,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue: DataTypes.NOW,
        },
        //consider adding an image field
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
    }
)

module.exports = Recipe;