const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ network: 102, messaging: 0, jobs: 0, notifications: 12 });
});

app.listen(3000, (req, res) => {
  console.log("Seerver is listening to port 3000");
});
