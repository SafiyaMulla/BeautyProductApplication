import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { RouterModule, Route } from '@angular/router'
import { LoginComponent } from './user/login/login.component';


import { CategoryAddComponent } from './home/category/add/category.add.component';
import { CategoryListComponent } from './home/category/list/category.list.component';
import { CategoryService } from './home/category/category.service';
import { ProductAddComponent } from './home/products/add/product.add.component';
import{  OrderItemService} from './home/orderedItems/orderitem.service'
import { ProductService } from './home/products/product.service';
import { ProductListComponent } from './home/products/list/product.list.component';
import { CustomerComponent } from './home/customers/customer.component';
import { CustomerService } from './home/customers/customer.service';
import { OrderItemComponent } from './home/orderedItems/orderitem.component';
import { OrderService } from './home/orders/order.service';
import { OrderComponent } from './home/orders/order.component';
import { ProductEditComponent } from './home/products/edit/edit.component';
import { OfferListComponent } from './home/offers/list/offer.list.component';
import { OfferService } from './home/offers/offer.service';
import { OfferAddComponent } from './home/offers/add/offer.add.component';



const routes: Route[] = [
  {path:'', component:LoginComponent},
  { path: 'user-login', component: LoginComponent },
  { path: 'user-register', component: RegisterComponent },
  {path:'category-list',component:CategoryListComponent},
  {path:'category-add',component: CategoryAddComponent },
  {path:'products-list',component:ProductListComponent},
  {path:'product-add',component:ProductAddComponent },
  {path:'app-order',component:OrderComponent },
  {path:'customer-list',component:CustomerComponent },
  {path:'order-list',component:OrderComponent },
  {path:'order-item',component:OrderItemComponent },
  {path:'product-edit/:product_id',component:ProductEditComponent },
  {path:'offer-list',component:OfferListComponent },
  {path:'offer-add',component:OfferAddComponent}
 
 
]
@NgModule({
  declarations: [
    AppComponent,
   RegisterComponent,
  LoginComponent,
  CategoryListComponent,
  ProductListComponent,
  ProductAddComponent,
  CategoryAddComponent,
  OrderItemComponent,
  OrderComponent,
  ProductEditComponent,
  CustomerComponent,
  OfferListComponent,
  OfferAddComponent
  
  ],
  imports: [
 
BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    CategoryService,
    CustomerService,
    ProductService,
    OrderItemService,
    OrderService,
    OfferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
