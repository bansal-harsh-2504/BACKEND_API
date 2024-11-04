const express = require("express");

const app = express();

app.get("/api/", (req, res) => {
  res.json({ network: 102, messaging: 0, jobs: 0, notifications: 12 });
});

app.get("*", (req, res) => {
  res.send("Invalid url");
});

app.listen(3000, (req, res) => {
  console.log("Server is listening to port 3000");
});
