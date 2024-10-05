const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://rohith_192:Rohith123@cluster0.eitti.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const Product = mongoose.model('Product', { name: String, price: Number });

// API Routes
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send(newProduct);
});

// Start server
app.listen(5000, () => {
    console.log('Backend server running on http://localhost:5000');
});
