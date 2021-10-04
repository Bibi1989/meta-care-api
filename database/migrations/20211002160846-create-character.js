"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Characters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
      },
      height: {
        type: Sequelize.TEXT,
      },
      mass: {
        type: Sequelize.TEXT,
      },
      hair_color: {
        type: Sequelize.TEXT,
      },
      skin_color: {
        type: Sequelize.TEXT,
      },
      eye_color: {
        type: Sequelize.TEXT,
      },
      birth_year: {
        type: Sequelize.TEXT,
      },
      gender: {
        type: Sequelize.TEXT,
      },
      homeworld: {
        type: Sequelize.TEXT,
      },
      url: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Characters");
  },
};
