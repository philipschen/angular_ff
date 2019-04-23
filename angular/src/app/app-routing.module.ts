import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterProdComponent} from './register-prod/register-prod.component';
import { RegisterConsComponent } from './register-cons/register-cons.component';
import { ProviderComponent} from './provider/provider.component';
import { RegisterProdKitchenComponent} from './register-prod-kitchen/register-prod-kitchen.component';
import { ConsKitchensComponent } from './cons-kitchens/cons-kitchens.component';
import { ConsKitchenViewComponent } from './cons-kitchen-view/cons-kitchen-view.component';
import { FfSplashComponent } from './ff-splash/ff-splash.component';
import { RegisterProdItemComponent } from './register-prod-item/register-prod-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: '', component: FfSplashComponent },
  { path: 'prov', component: RegisterProdComponent },
  { path: 'prov2', component: RegisterProdKitchenComponent },  
  { path: 'prov3', component: RegisterProdItemComponent }, 
  { path: 'cons', component: RegisterConsComponent },
  { path: 'test', component: ProviderComponent }, 
  { path: 'consk', component: ConsKitchensComponent },  
  { path: 'consk2', component: ConsKitchenViewComponent },  
  { path: 'cart', component: ShoppingCartComponent },  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }