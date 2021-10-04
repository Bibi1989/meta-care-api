"use strict";
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define("Character", {
    name: DataTypes.STRING,
    height: DataTypes.STRING,
    mass: DataTypes.STRING,
    hair_color: DataTypes.STRING,
    skin_color: DataTypes.STRING,
    eye_color: DataTypes.STRING,
    birth_year: DataTypes.STRING,
    gender: DataTypes.STRING,
    homeworld: DataTypes.STRING,
    url: DataTypes.STRING,
  });
  return Character;
};
