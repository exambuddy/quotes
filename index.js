const express = require("express");
const app = express();

// List of quotes
const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Dream big and dare to fail.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Keep going. Everything you need will come to you at the perfect time.",
  "Believe you can and you’re halfway there.",
];

// Route: GET /quote
app.get("/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log("REQ started")
  res.json({ quote: quotes[randomIndex] });
});

// Fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Start server
const PORT = 3000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/quote`);
});
