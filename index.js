import Product from "./Product.js";
import Cart from "./Cart.js";
import Customer from "./Customer.js";
import VIPCustomer from "./VipCustomer.js";

const p1 = new Product(1,"Mouse", 500);
const p2 = new Product(2,"Keyboard", 1500);

const c1 = new Customer("John");
const c2 = new VIPCustomer("Jack", "Gold");

c1.cart.addProduct(p1, 2);
c2.cart.addProduct(p2, 1);

c1.checkout();
c2.checkout();

Cart.prototype.showItems = function () {
  console.log("Cart Contents:");
  this.items.forEach((item) =>
    console.log(`${item.product.name} x ${item.quantity} = ₹${item.product.price * item.quantity}`)
  );
};

console.log("\nShowing cart items dynamically:");

c1.cart.showItems();
c2.cart.showItems();
