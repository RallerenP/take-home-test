const database = require("./database");
const PORT = 4000;
const app = require("express")();
const cors = require('cors');

if (process.env.NODE_ENV === "production") {
  app.use(cors([/* Insert productions URLS */]));
} else {
  // Set cors to allow local development
  app.use(cors({ origin: true }));
}


app.get("/", async (req, res) => {
  return res.send("Hello world");
});

app.get("/users", async (req, res) => {
  const db = await database();
  const result = await db.all(`SELECT * FROM users`);
  return res.json(result);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Backend started - listening on port ${PORT}`);
});
