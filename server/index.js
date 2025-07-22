import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const menuItems = [
  { id: 1, name: "Energy Drink", price: 15.99 },
  { id: 2, name: "Sandwich", price: 25.50 }
];

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
