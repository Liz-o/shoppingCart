import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
  {path:'',  component: ProductsComponent },
  { path: "products", component: ProductsComponent }  ,
  { path: "products/:catId", component: ProductsComponent }  ,
  {path: "about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
