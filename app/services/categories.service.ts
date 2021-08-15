import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CATEGORIES } from '../model/categories';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  urlCategories = "http://localhost:3000/categories"
  categories:Category[]=[]
  constructor(private httpClient: HttpClient ) {

   }

   getCategories():Observable<Category[]>{
     return this.httpClient.get<Category[]>(this.urlCategories)
      // const categories = of(CATEGORIES);
      // return categories;
   }

   getCategoryName(catId:number):string{
     this.getCategories().subscribe(res=>{
       this.categories = res
       let currentCat = this.categories.filter(cat=>cat.id == catId)[0]
       let result:string = (currentCat!=undefined)? (currentCat.name!=undefined?currentCat.name: '')  : ''
       return result
     })
     return '';
    //  let currentCat = CATEGORIES.filter(cat=>cat.id == catId)[0]
    //   let res:string = (currentCat!=undefined)? (currentCat.name!=undefined?currentCat.name: '')  : ''
    //   return res
   }
}
