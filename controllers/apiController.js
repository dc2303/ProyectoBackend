const {Product} = require("../models/productos")
const {validationResult} = require("express-validator")

module.exports = {
    saludo (req, res) {
        res.status(200).send(`buenas tardes`)
    },
    user (req, res) {
        res.status(200).send(`buenas noches`)
    },
    async lista (req, res) {
        const items = await Product.find()
        res.json({items})
    },
    async listaUnica (req, res) {
        const item = await Product.findById(req.params.id)
        res.json({item})
    },
    async crear (req, res) {
        try { 
            const err = validationResult(req)
            if (err.isEmpty()) {
                const item = new Product(req.body);
                await item.save();
                res.status(201).json({item})
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(401).json(error);
        }
    },
    async editar (req, res){
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                await Product.findByIdAndUpdate(req.params.id,req.body);
                res.status(201).json({msg: "el producto se actualizo id - " + req.params.id})
            } else {
                res.json(err)
            }
        } catch (error) {
            res.json(error)
        }
    },
    async eliminar (req, res){
        await Product.findByIdAndDelete(req.params.id)
        res.json({msg: "el producto se elimino"})
    }
}


