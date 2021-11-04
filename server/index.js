const chalk = require("chalk");
const debug = require("debug")("close:things");
const express = require("express");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.blue(`Listening port ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Error trying to initialize server"));

    if (error.code === "EADDRINUSE") {
      debug(chalk.green(`Port ${port} is ups`));
    }
  });
};

module.exports = initializeServer;
