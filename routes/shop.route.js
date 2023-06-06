// Importando el enrutador de express
import { Router } from 'express';
// Importando el gestor de rutas
//import path from 'path';
//importando el arreglo de productos
import { products } from './admin.route.js';

import httpStatus from 'http-status';

// Creando una instancia del enrutador de express
const router = Router();

//Importando productos
//import { products } from './admin.route.js';

// GET /

router.get('/', (req, res) => {
  //Mostrando productos en memoria
  console.log(products);
  console.log("📢 Sirviendo la ruta '/'");
  res.render('shop', {
    shop: 'active', 
    docTitle:"Shop",
    viewStyle: '/css/products.css',
    products
  });
});

/*
//La ruta raíz entra en todo tipo de petición
router.get(["/", "/home"], (_, res) => {
  //Mostrando productos en memoria
  console.log(`📱 Inventario de productos: ${JSON.stringify(products)}`);
  console.log("📒 Sirviendo recurso: 'shop.html'");
  res.render('shop', {shop: 'active', docTitle:"Tienda", products});
});
*/

// GET /about
router.get('/about', (req, res) => {
  console.log("📢 Sirviendo la ruta '/about'");
  // Se contesta al server
  res.send(`
    <h1>🔍 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

router.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).render('404',{layout:false});
});

export default router;