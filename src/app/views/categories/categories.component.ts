import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  {

  categories:Category[]=[]
  constructor(private srvCategories:CategoriesService) { 
    this.srvCategories.getCategories()
    .subscribe(res => {
      this.categories = res
      console.log(this.categories)
    });  
  }
  getCategories(): void {
    this.srvCategories.getCategories()
        .subscribe(res => {
          this.categories = res
          console.log(this.categories)
        });
  }
}
