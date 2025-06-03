const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyParser = require('body-parser');
const routes = require('./routes');
const config = require('./config/config');

const app = express();
const db = knex(config.db);

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.db = db;
  next();
});
app.use('/api', routes);

const PORT = config.port || 3000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
