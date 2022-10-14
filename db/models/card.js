'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {

    static associate({Deck}) {
      Card.belongsTo(Deck, {foreignKey: 'id'})
      // define association here
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    deckID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Deck',
        key: 'id'
      }
    },

      question: {
        type: DataTypes.TEXT,
      },
      answer: {
        type: DataTypes.TEXT,
      },
      
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },


  const options = {
    sequelize,
    modelName: 'Card',
    tableName: 'Cards',
  };

  Card.init(attributes, options);
  return Card;
};