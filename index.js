require("dotenv").config();
const server = require("./app/server");

const { info } = require("./app/utils/chalk");

const port = process.env.PORT;

server.listen(port, () => {
  console.log(info("Server started on port " + port));
});
