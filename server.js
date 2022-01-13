const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('colors');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection successful'.yellow));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `Running on port ${port} - '${process.env.NODE_ENV}' mode`.yellow
  );
});
