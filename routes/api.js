const express = require("express");
const router = express.Router();
const apicontroller =require("../controllers/apiController");
const validarID = require("../middleware/validarID");
const { ValidarCrear } = require("../middleware/ValidarCrear");
const { ValidarEditar } = require("../middleware/ValidarEditar");



//Routes
router.get(`/ver`, apicontroller.listaProduct)
router.get(`/ver/:id`,validarID,apicontroller.ProductoUnica)

router.post(`/crear`, ValidarCrear ,apicontroller.createProduct)

router.put(`/editar/:id` ,validarID ,ValidarEditar, apicontroller.UpdateProduct)

router.delete(`/borrar/:id`,validarID, apicontroller.DeleteProduct)

module.exports = router