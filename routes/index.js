const express = require('express')
const router = express.Router()
const flavorController = require('../controllers/flavorController.js')

module.exports = function() {
    // Agrega nuevos sabores via POST
    router.post('/flavors', flavorController.nuevoflavor);

    // Obtener todos los sabores
    router.get('/flavors', flavorController.mostrarFlavors);

    // Muestra un sabor en específico por medio de su ID
    router.get('/flavors/:idFlavor', flavorController.mostrarFlavor);

    // Actualizar sabor por ID
    router.put('/flavors/:idFlavor', flavorController.actualizarFlavor);

    // Eliminar sabor
    router.delete('/flavors/:idFlavor', flavorController.eliminarFlavor);

    return router;
}