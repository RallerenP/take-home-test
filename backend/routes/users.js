const router = require('express').Router();
const database = require('../database');

router.get("/", async (req, res) => {
  const db = await database();

  const result = await db.all(`SELECT * FROM users`);
  return res.json(result);
});

router.post("/", async (req, res) => {
  const db = await database();
  
  const { firstname, lastname, country, workplace_id } = req.body;

  // Insert user into database
  const result = await db.run(
    `INSERT INTO users (firstname, lastname, country, workplace_id) VALUES (?, ?, ?, ?)`,
    [firstname, lastname, country, workplace_id]
  );

  return res.json(result)
})

router.put("/:id", async (req, res) => {
  const db = await database();

  const { firstname, lastname, country, workplace_id } = req.body;

  const result = await db.run(
    `UPDATE users SET firstname = ?, lastname = ?, country = ?, workplace_id = ? WHERE id = ?`,
    [firstname, lastname, country, workplace_id, req.params.id]
  );

  return res.json(result)
});

router.delete("/:id", async (req, res) => {
  const db = await database();

  const id = req.params.id;

  // Delete user from database
  const result = await db.run(
    `DELETE FROM users WHERE id = ?`,
    [id]
  );

  return res.json(result);
});

module.exports = router;