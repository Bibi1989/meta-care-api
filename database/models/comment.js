"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    message: DataTypes.STRING,
    ip: DataTypes.STRING,
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Movie, {
      foreignKey: "movieId",
      as: "movie",
      onDelete: "CASCADE",
    });
  };
  return Comment;
};
