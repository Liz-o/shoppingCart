
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart';

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  urlCart="http://localhost:3000/cart";
  cartId:number = 3
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getCart():Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(this.urlCart)
  }
  
  //create new cart item
    addToCart(prodId:number){
    // let myCart:Cart[] = []
    // let currentCartProduct:Cart|undefined
    // console.log(prodId)
    // this.getCart().subscribe(res=>{
    //   myCart =res;
    //   console.log(myCart)
    //   currentCartProduct = myCart.find(c=>c.productId == prodId);
    //   console.log(currentCartProduct)
    //   if (currentCartProduct != undefined) 
    //   {
    //      return this.httpClient.put<Cart>(`${this.urlCart}/${currentCartProduct.id}`,{"amount":currentCartProduct.amount++})  
    //   }
    //   else{
        console.log("create cart item for product id: " + prodId)
         return this.httpClient.post<Cart>(this.urlCart,{"productId":prodId,"amount":1, "date":null, "userId": null})
        //  .pipe(catchError(this.errorHandler))
      // }
      // console.log(myCart)
    // })
    // return this.httpClient.post<Cart>(this.urlCart, {"id": this.cartId++, "productId": prodId, "amount": 1, "userId":null, "date":null }) 

    // currentCartProduct = myCart.find(c=>c.productId == prodId);
    // console.log(currentCartProduct)
    
    //   if (currentCartProduct != undefined) 
    //   {
    //     return this.httpClient.put<Cart>(`${this.urlCart}/${currentCartProduct.id}`,{"amount":currentCartProduct.amount++})  
    //   }
    //   else{
    //      return this.httpClient.post<Cart>(this.urlCart, {"id": this.cartId++, "productId": prodId, "amount": 1, "userId":null, "date":null }) 
    //   }
      // console.log(myCart)
  }

  getCartProdAmount(prodId:number):Observable<Cart>{
    let amount:number=1
    console.log('update cart')
    return this.httpClient.get<Cart>(`${this.urlCart}?productId=${prodId}`)
  }

  updateProdCartAmount(cartProd:Cart){
    console.log('update cart')
    let amount = cartProd.amount+1
    console.log('amount: ' + amount)
    return this.httpClient.put<Cart>(`${this.urlCart}/${cartProd.id}`,{"amount":amount, "productId": cartProd.productId, "userId":cartProd.userId, "date": cartProd.date })  
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

  removeFromCart(prodId:number){
    // let myCart:Cart[] = []
    // let currentProducts:Cart|undefined
    // this.getCart().subscribe(res=>{
    //   myCart =res;
    //   currentProducts = myCart.find(c=>c.productId == prodId);
    //   currentProducts != undefined && currentProducts.amount>0 && currentProducts.amount--  
    // })   
    
    return this.httpClient.delete<Cart>(`${this.urlCart}/${prodId}`)
  }
}
