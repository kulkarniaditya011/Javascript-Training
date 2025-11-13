export default class product{
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price
    }

    getInfo(){
        return `${this.id}, ${this.name}, ${this.price}`
    }
}
