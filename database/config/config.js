require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "",
    database: "care_test",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "mysql",
  },
};
