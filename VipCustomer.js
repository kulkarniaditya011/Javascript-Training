import Customer from "./Customer.js"

export default class VIPCustomer extends Customer{
    constructor(name, tier){
        super(name)
        this.tier=tier
    }

    //this is method overriding
    getDiscount(){
        if(this.tier === "Gold") return 10;
        if(this.tier==="Platinum") return 20;
        return 5;
    }
}