const database = require("./database");
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;


if (process.env.NODE_ENV === "production") {
  app.use(cors([/* Insert productions URLS */]));
} else {
  // Set cors to allow local development
  app.use(cors({ origin: true }));
}

app.use(express.json());

app.get("/", async (req, res) => {
  return res.send("Hello world");
});

app.get("/users", async (req, res) => {
  const db = await database();

  const result = await db.all(`SELECT * FROM users`);
  return res.json(result);
});

app.post("/users", async (req, res) => {
  const db = await database();
  
  const { firstname, lastname, country } = req.body;

  // Insert user into database
  const result = await db.run(
    `INSERT INTO users (firstname, lastname, country) VALUES (?, ?, ?)`,
    [firstname, lastname, country]
  );

  return res.json(result)
})

app.put("/users/:id", async (req, res) => {
  const db = await database();

  const { firstname, lastname, country } = req.body;
  const id = req.params.id;

  // Update user in database
  const result = await db.run(
    `UPDATE users SET firstname = ?, lastname = ?, country = ? WHERE id = ?`,
    [firstname, lastname, country, id]
  );

  return res.json(result);
})

app.delete("/users/:id", async (req, res) => {
  const db = await database();

  const id = req.params.id;

  // Delete user from database
  const result = await db.run(
    `DELETE FROM users WHERE id = ?`,
    [id]
  );

  return res.json(result);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Backend started - listening on port ${PORT}`);
});
