"use strict";
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define("Movie", {
    title: DataTypes.STRING,
    opening_crawl: DataTypes.STRING,
    release_date: DataTypes.STRING,
    director: DataTypes.STRING,
    producer: DataTypes.STRING,
    url: DataTypes.STRING,
  });

  Movie.associate = (models) => {
    Movie.hasMany(models.Comment, {
      foreignKey: "movieId",
      as: "comments",
    });
  };
  return Movie;
};
