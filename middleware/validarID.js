const {Product} = require("../models/productos")
module.exports = validarID = async (req, res, next) =>{
    try {
        const shopp = await Product.findById(req.params.id)
        if (shopp !== null) {
            next();
        } else {
            return res.status(503).json({msg: "el id es invalido"})
        }
    } catch (error) {
        res.status(503).json(error)
    }
}