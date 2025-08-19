// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/dbConfig');

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});