import utils from "./utils.js";

export class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
  }
  static correlativoId = 0;
  async addProduct(title, description, price, thumbnail, code, stock) {
    if (
      title == undefined ||
      description == undefined ||
      price == undefined ||
      thumbnail == undefined ||
      code == undefined ||
      stock == undefined
    ) {
      throw new Error("Todos los campos son obligatorios");
    }
    try {
      let data = await utils.readFile(this.path);
      this.products = data?.length > 0 ? data : [];
    } catch (error) {
      console.log(error);
    }

    let codeExists = this.products.some((dato) => dato.code == code);

    if (codeExists) {
      throw new Error("El codigo ya existe por favor verifique");
    } else {
      ProductManager.correlativoId = this.products.length + 1;
      const newProduct = {
        id: ProductManager.correlativoId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
      // console.log(this.products);
      try {
        await utils.writeFile(this.path, this.products);
      } catch (error) {
        console.log(error);
      }
    }
  }
  async getProducts() {
    try {
      let data = await utils.readFile(this.path);
      // Correccion
      return data?.length > 0 ? data : [];
    } catch (error) {
      console.log(error);
    }
  }
  async getProductById(id) {
    try {
      let data = await this.getProducts();
      let product = data.find((dato) => dato.id === id);

      if (product !== undefined) {
        return product;
      } else {
        return "no existe el producto solicitado";
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateProductById(id, data) {
    try {
      let products = await this.getProducts();

      let productIndex = products.findIndex((dato) => dato.id === id);
      if (productIndex !== -1) {
        this.products[productIndex] = {
          ...this.products[productIndex],
          ...data,
        };
        await utils.writeFile(this.path, products);
        return {
          mensaje: "producto actualizado",
          producto: this.products[productIndex],
        };
      } else {
        return { mensaje: "no existe el producto solicitado" };
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProductById(id) {
    try {
      let products = await this.getProducts();

      let productIndex = products.findIndex((dato) => dato.id === id);
      if (productIndex !== -1) {
        let product = this.products[productIndex];
        this.products.splice(productIndex, 1);
        await utils.writeFile(this.path, products);
        return { mensaje: "producto eliminado", producto: product };
      } else {
        return { mensaje: "no existe el producto solicitado" };
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default {
  ProductManager,
};
