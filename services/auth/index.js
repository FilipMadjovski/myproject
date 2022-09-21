const config = require("../../pkg/config");
require("../../pkg/db");

const express = require("express");
const jwt = require("express-jwt");
const auth = require("./hendlers/auth");

const app = express();
app.use(express.json());
app.use(
  jwt({
    secret: config.get("security").jwt_key,
    algorithms: ["HS256"],
  }).unless({
    path: [
      "/api/v1/auth/login",
      "/api/v1/auth/register",
      "/api/v1/auth/forgot-password",
      "/api/v1/auth/reset-password",
    ],
  })
);

app.post("/api/v1/auth/login", auth.login);
app.post("/api/v1/auth/register", auth.register);
app.get("/api/v1/auth/refresh-token", auth.refreshToken);
app.post("/api/v1/auth/forgot-password", auth.forgotPassword);
app.post("/api/v1/auth/reset-password", auth.resetPassword);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  }
});

app.listen(config.get("services").auth.port, (err) => {
  if (err) return console.log(err);
  console.log(`Server started on port: ${config.get("services").auth.port}`);
});

module.exports = app;
