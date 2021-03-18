const express = require("express")
const server = express();


require('./startup/routes')(server);
require('./startup/logging')()
// this condition for throwing error if jwt sercret key is not present in .env file
if (!process.env.JWT_PRIVATE_KEY) {
    console.error('FATAL ERROR: JWT_PRIVATE_KEY isnot been defined in env.')
    process.exit(1)
}


module.exports = server;
