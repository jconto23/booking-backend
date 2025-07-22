 
// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const db = require('./config/db');

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Ruta básica para probar
app.get('/', (req, res) => {
  res.send('✅ API de reservas funcionando correctamente.');
});

// Conectar a la base de datos (opcional pero útil)
db.connect()
  .then(() => {
    console.log('✅ Conexión a la base de datos establecida');
  })
  .catch((err) => {
    console.error('❌ Error al conectar a la base de datos:', err);
  });

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
