import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterProdComponent} from './register-prod/register-prod.component';
import { ProviderComponent} from './provider/provider.component';
import { RegisterProdKitchenComponent} from './register-prod-kitchen/register-prod-kitchen.component';
import { ConsKitchensComponent } from './cons-kitchens/cons-kitchens.component';



const routes: Routes = [
  { path: '', component: RegisterProdComponent },
  { path: 'prov', component: RegisterProdComponent },
  { path: 'test', component: ProviderComponent },
  { path: 'prov2', component: RegisterProdKitchenComponent },  
  { path: 'cons', component: ConsKitchensComponent },  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }