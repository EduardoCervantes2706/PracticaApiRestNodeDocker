const newLocal = '../models/Flavors';
const Flavors = require(newLocal);

// Agrega un nuevo cliente
exports.nuevoflavor = async(req, res, next) => {
    const flavor = new Flavors(req.body);

    try {
        // Almacenar registro
        await flavor.save();
        res.json({mensaje: 'Se agregó un nuevo sabor'});
    } catch (error) {
        // Si hay un error, console.log y next
        console.log(error);
        next();
    }
}

exports.mostrarFlavors = async(req, res, next) => {
    try {
        const flavors = await Flavors.find({});
        res.json(flavors);
    } catch(error) {
        console.log(error);
        next();
    }
}

exports.mostrarFlavor = async(req, res, next) => {
    try {
        const flavor = await Flavors.findById(req.params.idFlavor);
        if(!flavor) {
            res.json({mensaje: 'Ese sabor no existe'});
            return next();
        }
        // Mostrar sabor
        res.json(flavor);
    } catch( error ) {
        console.log(error);
        next();
    }
}

exports.actualizarFlavor = async(req, res, next) => {
    try {
        const flavor = await Flavors.findByIdAndUpdate({_id: req.params.idFlavor}, req.body, {
            new: true
        });
        res.json(flavor);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarFlavor = async(req, res, next) => {
    try {
        const flavor = await Flavors.findOneAndDelete({_id: req.params.idFlavor});
        res.json({mensaje: 'Sabor eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}