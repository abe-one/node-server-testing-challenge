require("dotenv").config();

const server = require("./api/server");
const { PORT } = require("./utils/envVariables.js");

server.listen(PORT, () => {
  console.log(`\n\n server listening on port ***${PORT}***\n`);
});
