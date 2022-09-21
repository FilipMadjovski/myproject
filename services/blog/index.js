const config = require('../../pkg/config');
require('../../pkg/db');
const express = require('express');
const jwt = require('express-jwt');
const post = require('./hendlers/post');

const app = express();
app.use(express.json());
app.use(
  jwt({
    secret: config.get('security').jwt_key,
    algorithms: ['HS256'],
  })
);

app.get('/api/v1/blog', post.getAll);
app.get('/api/v1/blog', post.getSingle);
app.post('/api/v1/blog', post.create);
app.put('/api/v1/blog/:id', post.update);
app.patch('/api/v1/blog', post.updatePartial);
app.delete('/api/v1/blog', post.remove);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  }
});

app.listen(config.get('services').blog.port, (err) => {
  if (err) return console.log(err);
  console.log(`Server started on port: ${config.get('services').blog.port}`);
});

module.exports = app;
