const express = require('express');
const router = express.Router();
const Pelicula = require('../models/Pelicula');
// Ruta para obtener todas las películas
router.get('/', async (req, res) => {
try {
const peliculas = await Pelicula.find();
res.json(peliculas);
 } catch (error) {
res.status(500).json({ mensaje: 'Error al obtener películas' });
 }
});
module.exports = router;