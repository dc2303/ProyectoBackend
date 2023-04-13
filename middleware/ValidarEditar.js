const {check} = require("express-validator");

const ValidarEditar = [
    check("name").not().isEmpty().withMessage("el campo name es obligatorio para editar el producto").isLength({min:4, mmax:20}).withMessage("el campo name debe contener entre 4 y 20 caracteres"),
    check("price").not().isEmpty().withMessage("el campo price es obligatorio para editar el producto "),
    check("brand").not().isEmpty().withMessage("el campo brand es obligatorio para editar el producto "),
    check("description").not().isEmpty().withMessage("el campo description es obligatorio para editar el producto ").isLength({min:10, mmax:30}).withMessage("el campo description debe contener entre 10 y 30 caracteres"),
    check("stock").not().isEmpty().withMessage("el campo stock es obligatorio para editar el producto "),
    check("model").not().isEmpty().withMessage("el campo model es obligatorio para editar el producto "),
];

module.exports = {ValidarEditar}