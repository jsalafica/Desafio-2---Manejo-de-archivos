import { ProductManager } from "./ProductManager.js";

let product = new ProductManager("./productos.json");

// Cargo primer producto
await product.addProduct(
  "producto prueba 1",
  "Este es un producto de prueba",
  300,
  "sin imagen",
  "abc1c3aaaa",
  345
);

// Cargo otro producto
await product.addProduct(
  "producto prueba 2",
  "Este es un producto de prueba",
  500,
  "sin imagen",
  "abc1c3aaaaa",
  255
);

// Intento cargar producto con mismo code
// product.addProduct(
//   "producto prueba 2",
//   "Este es un producto de prueba",
//   500,
//   "sin imagen",
//   "abc1c3aaaaa",
//   255
// );

// Obtengo todos los productos
// product.getProducts().then((data) => console.log("get products", data));

// Obtengo producto por id 1
// product
//   .getProductById(1)
//   .then((data) => console.log("get product by id", data));

// Actualizo producto por id 2
// product
//   .updateProductById(2, {
//     title: "pizza con piña",
//     description: "pizza con description ",
//     price: 400,
//     thumbnail: "fotito.jpg",
//     code: "pizzapizza",
//   })
//   .then((data) => console.log("resultado", data));

// Borro producto por id 1
// product
//   .deleteProductById(1)
//   .then((data) => console.log("el resultado de la eliminacion es:", data));
