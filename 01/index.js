const typeorm = require("typeorm");
const { connectionConfig } = require("./db-config");

(async () => {
  const connection = await typeorm.createConnection(connectionConfig);

  connection.synchronize(true);
})();
