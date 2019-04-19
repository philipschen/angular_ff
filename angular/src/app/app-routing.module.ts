import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterProdComponent} from './register-prod/register-prod.component';
import { ProviderComponent} from './provider/provider.component';

const routes: Routes = [
  { path: 'prov', component: RegisterProdComponent },
  { path: 'test', component: ProviderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }