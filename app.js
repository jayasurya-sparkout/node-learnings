const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from Node.js!');
});

let user = [];

app.post('/user', (req, res) => {
  const { name, time } = req.body;

  if (!name || !time) {
    return res.status(400).json({ error: "Missing 'name' or 'time'" });
  }

  const newComment = { name, time };
  user.push(newComment);

  res.status(201).json({ message: "Comment added", comment: newComment });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});