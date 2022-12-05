'use strict';

import Connection from 'pg/lib/connection';

const { Model, DataTypes } = require('sequelize');

const initCity = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      // define association here
      City.hasMany(models.Place, { foreignKey: "CityId" })

    }
  }
  City.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
export default initCity(Connection, DataTypes)