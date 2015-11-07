'use strict';
const chalk = require('chalk');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 1985;
app.listen(PORT, () => {
  console.log(chalk.blue(`Server started on port ${PORT}`));
});
