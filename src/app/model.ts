export class Model {

    
    products: Array<Product>;

    constructor(){
        
        this.products= [
            new Product(1,'samsung s7',2000,true),
            new Product(2,'samsung s8',3000,true),
            new Product(3,'samsung s9',4000,false),
            new Product(4,'samsung s10',5000,true)
      ];
    }

}

export class Product{
    id:number;
    name: string;
    price:number;
    isActive:boolean;
    constructor(id:number,name,price,isActive){
        this.id=id;
        this.name=name;
        this.isActive=isActive;
        this.price=price;
    }
}