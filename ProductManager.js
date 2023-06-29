export default class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
  }
  async addProduct(title, description, price, thumbnail, code, stock) {}

  async getProducts() {}

  async getProductById(id) {}

  async updateProductById(id) {}

  async deleteProductById(id) {}
}
