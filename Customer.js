
import Cart from "./Cart.js"

export default class Customer{
    constructor(name){
        this.name=name
        this.cart= new Cart()
    }

    getDiscount(){
        return 0; //normal customers have 0 discounts, 
                    // premium customers or VIP customers have discounts
    }

    checkout(){
        const total= this.cart.getTotal();
        const discount= (this.getDiscount()/100)*total;
        const finalAmount= total-discount;
        console.log(`${this.name} is checking out, applied discount: ₹ ${discount}, and the total cost is ₹ ${finalAmount}`);
        
    }

}