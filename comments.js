// Create web server
// Create a server
const express = require('express');
const app = express();
const path = require('path');
// Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});