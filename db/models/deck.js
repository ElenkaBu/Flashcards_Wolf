'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Card}) {
      Deck.hasMany(Card, { foreignKey: 'deckID'}),
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
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    
  };

  const options = {
    sequelize,
    modelName: 'Deck',
    tableName: 'Decks',
  };
  Deck.init(attributes, options);
  return Deck;
};