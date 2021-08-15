import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';
import { PRODUCTS } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product[]=[]
  // products:Product[]=PRODUCTS
  // myCart:Product[] = []
  urlProducts = "http://localhost:3000/products"
  constructor(private httpClient :HttpClient) { }

  getProductsByCategoryId(catId:number):Observable<Product[]>{
      return this.httpClient.get<Product[]>(this.urlProducts + "?categoryId=" + catId)

      // return of(this.products.filter(prod=> prod.categoryId == catId))
  }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlProducts)
    // return of(this.products);
  }


  getProductById(prodId:number):Observable<Product>{
    return this.httpClient.get<Product>(this.urlProducts+ "/"+ prodId)
  }

  
  // getCart():Observable<Product[]>{    
  //   return of(this.myCart);
  // }

  // addToCart(item:Product){
  //   this.myCart.push(item);
  // }
}
