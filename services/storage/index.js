const config = require('../../pkg/config');
const express = require('express');
const jwt = require('express-jwt');
const fileupload = require('express-fileupload');
const storage = require('./hendlers/storage');

const app = express();

app.use(
  jwt({
    algorithms: ['HS256'],
    secret: config.get('security').jwt_key,
  })
);
app.use(fileupload());

app.post('/api/v1/storage', storage.upload);
app.get('/api/v1/storage/:filename', storage.download);

app.listen(config.get('services').storage.port, (err) => {
  if (err) return console.log(err);
  console.log(`Server started on port ${config.get('services').storage.port}`);
});
