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

// app.get("/", async (req, res) => {
//   return res.send("Hello world");
// });

app.use('/users', require('./routes/users'));
app.use('/workplaces', require('./routes/workplaces'));


app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Backend started - listening on port ${PORT}`);
});
