const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

// Serve static files
app.use(express.static('public'));
app.use('/static', express.static('public'));
app.use('/assets', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <h1>Static Files</h1>
    <img src="/images/photo-000.png" alt="Logo">
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
