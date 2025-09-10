const express = require('express');
const app = express();
app.use(express.json()); // to handle JSON body

// Example data
let users = [
  { id: 1, name: "Sujal", age: 20 },
  { id: 2, name: "Alex", age: 25 }
];

// 1. GET → Read
app.get('/', (req, res) => {
  res.json(users);
});

// 2. POST → Create
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 3. PUT → Replace
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.map(u => u.id === id ? { id, ...req.body } : u);
  res.json({ message: "User replaced" });
});

// 4. PATCH → Update partially
app.patch('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.map(u => u.id === id ? { ...u, ...req.body } : u);
  res.json({ message: "User updated" });
});

// 5. DELETE → Remove
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: "User deleted" });
});

// 6. HEAD → Only headers
app.head('/users', (req, res) => {
  res.set('X-Custom-Header', 'Test');
  res.status(200).end();
});

// 7. OPTIONS → Allowed methods
app.options('/users', (req, res) => {
  res.set('Allow', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
  res.send();
});

app.listen(3000, () => console.log("✅ Server running at http://localhost:3000"));
