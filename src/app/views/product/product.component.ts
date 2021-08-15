import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
@Input() products:Product[] = []
// @Input() myCart:Cart[] = []
@Input() catName:string=''
@Output()  newItemEvent = new EventEmitter<Product>();
@Output() removeItemEvent = new EventEmitter<Product>();
  constructor(private srvCart:CartService) { 
    
  }

  addProduct(item: Product) {
    this.newItemEvent.emit(item);
    
    
    // this.srvCart.addToCart(item.id);
    //  this.myCart.push(item);
    // this.srvCart.getCart().subscribe(res=> 
    //   {
    //     this.myCart = res
    //     console.log(this.myCart);    
    //   })
    
  }

  removeProduct(item:Product){
    this.removeItemEvent.emit(item);
  }
}
