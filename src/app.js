// ************ Require's ************

const express = require('express');
const session = require("express-session");
const path = require('path');
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
const userIsLogged = require("./middlewares/userIsLogged"); // Usuario logueado false o true
const userAdminIsLogged = require("./middlewares/userAdminIsLogged"); // User admin false o true

// ************ express() - (don't touch) ************

const app = express();

// ************ Middlewares - (don't touch) ************

const publicPath = path.resolve(__dirname, '../public');
app.use(session({
    secret: "Secreto",
    resave: false,
    saveUninitialized: false,
}));
app.use(userIsLogged);
app.use(userAdminIsLogged);
app.use(express.static(publicPath));  // Indica donde estan los archivos estáticos /public
app.use(express.urlencoded({ extended: false }));  // Captura la informacion enviada por POST
app.use(express.json());
app.use(methodOverride('_method'));  // Para poder pisar el method="POST" en el formulario por PUT y DELETE

// ************ Template Engine - (don't touch) ************

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

// ************ Route System require and use() ************

const homeRouter = require("./routes/home");
const productsRouter = require("./routes/products");
const searchRouter = require("./routes/search");
const usersRouter = require("./routes/users");
const cartRouter = require("./routes/cart");
const settingsRouter = require("./routes/settings");

app.use('/', homeRouter);
app.use('/products/', productsRouter);
app.use('/search/', searchRouter);
app.use('/users/', usersRouter);
app.use('/cart/', cartRouter);
app.use('/settings/', settingsRouter);

// ************ Run server ************

app.listen(3000, () => {
    console.log('Server running in 3000 port');
});