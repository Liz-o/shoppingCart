import { Component } from '@angular/core';
import { Category } from './model/category';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingCart';
  // categories = this.categoryTypes;
  //eCategoryType = CategoryType;

  // categories:Category[] = []
  // public get categoryTypes(): typeof CategoryType {
  //   return CategoryType; 
  // }
   constructor(){

    // getMyCart(){
      
    // }
  }
}
