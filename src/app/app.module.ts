import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { StarsComponent } from './component/stars/stars.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { ProductComponent } from './component/product/product.component';
import { SearchComponent } from './component/search/search.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productDeatils/:productTitle', component: ProductDetailsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StarsComponent,
    CarouselComponent,
    ProductComponent,
    SearchComponent,
    HomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
