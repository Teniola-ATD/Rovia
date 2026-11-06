const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 1. YOUR BACKEND API ROUTES
// Example: app.use('/api/v1/auth', require('./routes/auth'));

// 2. SERVE STATIC FRONTEND FILES
app.use(express.static(path.join(__dirname, 'public')));

// 3. CATCH-ALL ROUTE (Serves your Rovia landing page for root / or any web route)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Rovia Unified Server running on port ${PORT}`);
});

const path = require('path');

// 1. Serve your static frontend files (Images, CSS, JS, HTML)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Serve index.html whenever someone visits the root URL "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Optional: Catch-all for single page navigation
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});