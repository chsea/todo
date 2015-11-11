'use strict';
const chalk = require('chalk');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const util = require('util');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    util.log(('---NEW REQUEST---'));
    console.log(util.format(chalk.red('%s: %s %s'), 'REQUEST ', req.method, req.path));
    console.log(util.format(chalk.yellow('%s: %s'), 'QUERY   ', util.inspect(req.query)));
    console.log(util.format(chalk.cyan('%s: %s'), 'BODY    ', util.inspect(req.body)));
    next();
});

require('./routes/statics')(app);
require('./routes/authentication')(app);

app.use('/api', require('./routes'));

const indexPath = path.join(__dirname, './index.html');
app.get('/*', (req, res) => res.sendFile(indexPath));

const PORT = process.env.PORT || 1985;
app.listen(PORT, () => {
  console.log(chalk.blue(`Server started on port ${PORT}`));
});
