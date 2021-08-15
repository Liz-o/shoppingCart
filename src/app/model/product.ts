
import { ProductType } from "./productType";

export class Product {
    id: number = 0;
    categoryId: number;
    type: ProductType = ProductType.Dresses;
    name: string = '';
    price: number = 0;
    img?:string;


    constructor(id: number, categoryId: number, type: ProductType, name: string, price: number, img?:string) {
        this.id = id;
        this.categoryId = categoryId;
        this.type = type;
        this.name = name;
        this.price = price;
        this.img = img;
    }

}
