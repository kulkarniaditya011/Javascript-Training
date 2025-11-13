export default class cart{
    constructor(){
        this.items =[];
    }

    addProduct(product, quantity=1){
        this.items.push({product,quantity})
    }

    getTotal() {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,0);
  }
}