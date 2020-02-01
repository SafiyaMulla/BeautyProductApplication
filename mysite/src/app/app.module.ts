import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products/products.service';
import{HttpClientModule} from '@angular/common/http';
import { SkinComponent } from './skin/skin.component';
import { SkinService } from './skin/skin.service';
import { MakeupComponent } from './makeup/makeup.component';
import { MakeupService } from './makeup/makeup.service';
import { EyeComponent } from './eye/eye.component';
import { EyeService } from './eye/eye.service';
import { AddCartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './user/user.service';
import { HairService } from './Hair/hair.service';
import { HairComponent } from './Hair/hair.componet';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order/order.service';
import { LipComponent } from './lipcare/lipcare.component';

import { LipService } from './lipcare/lipcare.service';
import { SearchService } from './search/search.service';
import { SearchComponent } from './search/search.component';
import { OfferComponent } from './offers/offer.component';
import { OfferService } from './offers/offer.service';

const routes: Route[] = [
  {path:'', component:ProductsComponent},
  {path:'app-product', component:ProductsComponent},
  {path:'app-skin', component:SkinComponent},
  {path:'app-makeup',component:MakeupComponent},
  {path:'add-cart/:user_id',component:AddCartComponent},
  {path:'user-login',component:LoginComponent},
  {path:'user-register',component:RegisterComponent},
  {path:'app-eye',component:EyeComponent},
  {path:'app-hair',component:HairComponent},
  {path:'order-place',component:OrderComponent},
  {path:'app-lip',component:LipComponent},
  {path:'app-search',component:SearchComponent},
  {path:'app-offer',component:OfferComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SkinComponent,
    MakeupComponent,
    EyeComponent,
   AddCartComponent,
    LoginComponent,
    RegisterComponent,
    HairComponent,
    OrderComponent,
   LipComponent,
   SearchComponent,
   OfferComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductsService,
    SkinService,
    MakeupService,
    EyeService,
   CartService,
    UserService,
    HairService,
    OrderService,
    LipService,
    SearchService,
    OfferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
