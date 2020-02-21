const entities = require("./entity");

const connectionConfig = {
  type: "postgres",
  url: "postgres://user:password@localhost:5432/db",
  logging: true,
  entities,
  synchronize: true
};

module.exports = { connectionConfig };
