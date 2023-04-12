const express = require("express")
const router = express.Router()
const apicontroller =require("../controllers/apiController")
const validarID = require("../middleware/validarID")
const {check} = require("express-validator")

router.get(`/saludo`, apicontroller.saludo)
router.get(`/user`, apicontroller.user)
router.get(`/ver`, apicontroller.lista)
router.get(`/ver/:id`,validarID,apicontroller.listaUnica)
router.post(`/crear`,[
    check("name").not().isEmpty().withMessage("el campo name es obligatorio").isLength({min:4, mmax:20}).withMessage("el campo name debe contener entre 4 y 20 caracteres"),
    check("price").not().isEmpty().withMessage("el campo price es obligatorio"),
    check("brand").not().isEmpty().withMessage("el campo brand es obligatorio"),
    check("description").not().isEmpty().withMessage("el campo description es obligatorio").isLength({min:10, mmax:30}).withMessage("el campo description debe contener entre 10 y 30 caracteres"),
    check("stock").not().isEmpty().withMessage("el campo stock es obligatorio"),
    check("model").not().isEmpty().withMessage("el campo model es obligatorio"),
] ,apicontroller.crear)
router.put(`/editar/:id` ,validarID ,[
    check("name").not().isEmpty().withMessage("el campo name es obligatorio para editar el producto").isLength({min:4, mmax:20}).withMessage("el campo name debe contener entre 4 y 20 caracteres"),
    check("price").not().isEmpty().withMessage("el campo price es obligatorio para editar el producto "),
    check("brand").not().isEmpty().withMessage("el campo brand es obligatorio para editar el producto "),
    check("description").not().isEmpty().withMessage("el campo description es obligatorio para editar el producto ").isLength({min:10, mmax:30}).withMessage("el campo description debe contener entre 10 y 30 caracteres"),
    check("stock").not().isEmpty().withMessage("el campo stock es obligatorio para editar el producto "),
    check("model").not().isEmpty().withMessage("el campo model es obligatorio para editar el producto "),
], apicontroller.editar)
router.delete(`/borrar/:id`,validarID, apicontroller.eliminar)

module.exports = router