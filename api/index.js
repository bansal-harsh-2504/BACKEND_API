const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.json({ network: 102, messaging: 0, jobs: 0, notifications: 12 });
});

app.get("/metadata", (req, res) => {
  res.json({
    mint: "BuMMZWi5s831uyd7rYJ9jD6doC8Fe4iZFpsJWUpcC6WW",
    name: "Hulk",
    symbol: "RAGE",
    image: "https://res.cloudinary.com/dqhpdgamm/image/upload/v1736172900/uaqqfnd3t6scnyihp18s.jpg",
  });
});

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.get("*", (req, res) => {
  res.send("Invalid url");
});

app.listen(3000, (req, res) => {
  console.log("Server is listening to port 3000");
});
