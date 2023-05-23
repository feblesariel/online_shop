// ************ Require's ************

const express = require("express");
const router = express.Router();
// const multer = require("multer");
// const path = require("path");
const {body} = require("express-validator");
// const estasLogueadoMiddleware = require("../middlewares/estasLogueadoMiddleware");
// const noEstasLogueadoMiddleware = require("../middlewares/noEstasLogueadoMiddleware");

// ************ Validations ************

const validationsLoginForm = [
    body("email").isEmail().withMessage("Debes ingresar el correo electronico."),
    body("password").notEmpty().withMessage("Debes ingresar una contraseña.").bail().isLength({ min: 8 }).withMessage("La contraseña debe tener un minimo 8 caracteres.")
];

// const validationsRegisterForm = [
//     body("name").notEmpty().withMessage("Debes ingresar un nombre de usuario.").bail().isLength({ min: 2}).withMessage("El nombre de usuario debe tener al menos 2 caracteres."),
//     body("password").notEmpty().withMessage("Debes ingresar una contraseña para el usuario.").bail().isLength({ min: 8 }).withMessage("La contraseña debe tener un minimo 8 caracteres."),
//     body("domicilio").notEmpty().withMessage("Debes ingresar un domicilio."),
//     body("zipcode").notEmpty().withMessage("Debes ingresar un codigo postal."),
//     body("email").notEmpty().withMessage("Debes ingresar un correo electronico.").bail().isEmail().withMessage("Debes usar un formato valido para el correo."),
// ];

// const validationsEditUsersForm = [
//     body("name").notEmpty().withMessage("Debes ingresar un nombre de usuario.").bail().isLength({ min: 2}).withMessage("El nombre de usuario debe tener al menos 2 caracteres."),
//     body("password").notEmpty().withMessage("Debes ingresar una contraseña para el usuario.").bail().isLength({ min: 8 }).withMessage("La contraseña debe tener un minimo 8 caracteres."),
//     body("domicilio").notEmpty().withMessage("Debes ingresar un domicilio."),
//     body("zipcode").notEmpty().withMessage("Debes ingresar un codigo postal."),
// ];

// ************ Controller Require ************

const usersController = require ("../controllers/users")

// ************ Rutas ************

router.get("/login/", usersController.login);
router.post("/login/", validationsLoginForm ,usersController.loginProcess);

router.get("/register", usersController.register);


module.exports = router;