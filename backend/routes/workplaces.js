const router = require('express').Router();
const database = require('../database');

router.get('/', async (req, res) => {
  const db = await database();

  const result = await db.all(`SELECT * FROM workplaces`);
  return res.json(result);
});

router.get('/:id', async (req, res) => {
  const db = await database();

  const id = req.params.id;

  // Get workplace from database
  const result = await db.get(
    `SELECT * FROM workplaces WHERE id = ?`,
    [id]
  );

  return res.json(result);
});

module.exports = router;