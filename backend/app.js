const express = require('express');
const app = express();
const router = express.Router();
const port = 8080;

// Middleware for this router
router.use((req, res, next) => {
  console.log('Router middleware triggered');
  next();
});

// Routes
router.get('/users', (req, res) => {
  res.send('List of all users');
});

router.post('/users', (req, res) => {
  res.send('User created');
});

router.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Mount router
app.use('/api', router);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
