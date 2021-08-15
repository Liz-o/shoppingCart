import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
myCart:Cart[]=[]
dataSource = new MatTableDataSource<Product[]>();
myProdCart:Product[]=[];
columnsToDisplay = ['name','price'];

@ViewChild(MatTable) table! : MatTable<Product>;

  constructor(private srvCart:CartService, private srvProd:ProductsService) { 
    this.srvCart.getCart().subscribe(arg => {
      this.myCart = arg

      let prodIds = this.myCart.map(c=> c.productId)
      console.log('list of prods: '+ prodIds)
      // this.myCart.forEach(c=>{
      //   this.srvProd.getProductById(c.productId).subscribe(res=>{
      //     let prod:Product = res
      //     this.myProdCart.push(prod);
      //   })
      // })      
      
      this.srvProd.getProducts().subscribe(res=>{
        let prods:Product[] = res
        var filtered = prods.filter(p=> prodIds.indexOf(p.id)>-1)

        this.myProdCart = filtered
        console.log(this.myProdCart)
      })
      // this.srvProd.getCartProduct(this.myCart).subscribe(res=> this.myProdCart = res)
      
    });
    
  }
  ngOnInit() {
    this.refresh();
  }
  refresh(){
    // this.srvProduct.addToCart(Product).subscribe((data: Product[]) => {
    //   this.dataSource.data = data;
  this.srvCart.getCart().subscribe(arg => this.myCart = arg);
    
  }

  addProduct(item: Product) {
    // this.myCart.push(item);
    this.srvCart.addToCart(item.id)
    this.refresh()
    this.table.renderRows();

    console.log(this.myCart);
  }

  removeProduct(prod: Product) {
    // let index: number = this.myCart.findIndex(p => p.id == prod.id);
    // if (index > -1) {
    //   this.myCart.splice(index, 1);
    // }
    this.srvCart.removeFromCart(prod.id)
    this.refresh()
    this.table.renderRows();
    console.log(this.myCart);
  }
}
