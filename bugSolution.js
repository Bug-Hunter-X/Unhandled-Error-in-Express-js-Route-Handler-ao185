const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  let user; 
  try {
    const parsedId = parseInt(userId);
    if (isNaN(parsedId)) {
      return res.status(400).send('Invalid user ID');
    }
    user = users.find(user => user.id === parsedId);
    if (!user) {
      return res.status(404).send('User not found');
    }
  } catch (error) {
    return res.status(500).send('Server error');
  }
  res.send(user);
});