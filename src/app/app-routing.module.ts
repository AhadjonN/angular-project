import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseComponent} from './components/base/base.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {BasketComponent} from './components/basket/basket.component';
import {ProductsComponent} from './components/products/products.component';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'basket', component: BasketComponent},

  {path: '**', redirectTo: '', component: BaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
