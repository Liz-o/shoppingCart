export class Cart {
    id:number
    userId?:number
    date?:Date
    productId:number
    amount:number

    constructor(id:number, prodId:number, amount:number, userId?:number, date?:Date){
        this.id = id
        this.productId = prodId;
        this.amount = amount
        this.userId = userId
        this.date = date
    }
}