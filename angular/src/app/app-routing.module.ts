import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterProdComponent} from './register-prod/register-prod.component';
const routes: Routes = [
  { path: 'prov', component: RegisterProdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }