import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  catId: number = 0;
  myCart: Cart[] = [];
  myProdCart:Product[]=[];
  products: Product[] = [];
  catName:string='';
  // products: Product[] = [
  //   new Product(1, 1, ProductType.Dresses, 'Long Dress', 100),
  //   new Product(2, 1, ProductType.Dresses, 'Short Dress', 80),
  //   new Product(3, 1, ProductType.Shirts, 'Long Shirt', 80),
  //   new Product(4, 1, ProductType.Shirts, 'T-shirt', 50),
  //   new Product(5, 1, ProductType.Pants, 'Long Pants', 130),
  //   new Product(6, 1, ProductType.Pants, 'Short Pants', 90)
  // ]

  constructor(private route: ActivatedRoute, private srvProduct: ProductsService, private srvCategories: CategoriesService, private srvCart: CartService) {
    this.route.params.subscribe(params => {
      console.log(params['catId']);
      this.catId = params['catId'];
      (this.catId != undefined) ? srvProduct.getProductsByCategoryId(this.catId).subscribe((arg) => this.products = arg):srvProduct.getProducts().subscribe(arg=>this.products = arg)
      
      // this.products =  (this.catId != undefined) ? srvProduct.getProductsByCategoryId(this.catId) :  srvProduct.getProducts()
      // this.myCart = srvProduct.getCart();  
      srvCart.getCart().subscribe(arg => {
        this.myCart = arg
        
      });
      this.catName = this.srvCategories.getCategoryName(this.catId);
      console.log(this.catName)

      // srvProduct.getProductsByCategoryId(this.catId).subscribe(res => {
        //   this.products = res
        //   console.log(this.products)
        // })
      // }
      // else{
      //   srvProduct.getProducts().subscribe(res=> {
      //     this.products = res;
      //     console.log(this.products)
      //   })
      // }
    })
  }

  addProduct(newItem: Product) {
    
    // let prod:Product|undefined = this.myProdCart.find(p=>p.id == newItem.id)
    let cartProd:Cart|undefined = this.myCart.find(p=>p.productId == newItem.id)
    console.log(`Cart: ${JSON.stringify(this.myCart)}`)    
    console.log(`new item: ${JSON.stringify(newItem)}`)
    console.log(`cart prod: ${JSON.stringify(cartProd)}`)
    console.log(cartProd)
    if (cartProd!=undefined){        
      // this.srvCart.getCartProdAmount(newItem.id).subscribe(res=>{
      //   let amount:number = res.amount
      //   console.log(`amount: ${amount}`)
        // this.srvCart.updateProdCartAmount(newItem.id, amount++).subscribe(res=>console.log(res));
      // })
      this.srvCart.updateProdCartAmount(cartProd).subscribe(res=>console.log(res));
      
      // this.myCart.push(new Cart()))  
    }
    else{
      this.srvCart.addToCart(newItem.id).subscribe(res=>{
        this.myProdCart.push(newItem);
        console.log('create res: ' + JSON.stringify(res))
        console.log(this.myProdCart)
      });      
    }
  }

  removeProduct(item:Product){
    this.srvCart.removeFromCart(item.id)
  }

  // addProduct(item: Product) {
  //   this.myCart.push(item);

  //   console.log(this.myCart);
  // }

  // removeProduct(prod: Product) {
  //   let index: number = this.myCart.findIndex(p => p.id == prod.id);
  //   if (index > -1) {
  //     this.myCart.splice(index, 1);
  //   }
  //   console.log(this.myCart);
  // }
}
