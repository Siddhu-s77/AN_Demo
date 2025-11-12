// Example Backend Server (Node.js/Express)
// This is a sample backend to demonstrate how to provide data to the dashboard

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for frontend
app.use(cors());
app.use(express.json());

// Sample data
let sampleData = [
    { id: 1, name: 'Product A', value: 1250, category: 'Electronics' },
    { id: 2, name: 'Product B', value: 980, category: 'Clothing' },
    { id: 3, name: 'Product C', value: 2100, category: 'Electronics' },
    { id: 4, name: 'Product D', value: 750, category: 'Food' },
    { id: 5, name: 'Product E', value: 1650, category: 'Electronics' },
    { id: 6, name: 'Product F', value: 890, category: 'Clothing' },
    { id: 7, name: 'Product G', value: 3200, category: 'Electronics' },
    { id: 8, name: 'Product H', value: 540, category: 'Food' },
    { id: 9, name: 'Product I', value: 1100, category: 'Clothing' },
    { id: 10, name: 'Product J', value: 1890, category: 'Electronics' },
    { id: 11, name: 'Product K', value: 670, category: 'Food' },
    { id: 12, name: 'Product L', value: 1450, category: 'Clothing' }
];

// API Endpoint to get data
app.get('/api/data', (req, res) => {
    // You can replace this with your actual database query
    // For example: const data = await db.query('SELECT * FROM products');
    
    res.json({
        records: sampleData,
        total: sampleData.length,
        timestamp: new Date().toISOString()
    });
});

// Alternative format - just return array
app.get('/api/data-array', (req, res) => {
    res.json(sampleData);
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/api/data`);
});

// To run this backend:
// 1. Install dependencies: npm install express cors
// 2. Run: node backend-example.js

