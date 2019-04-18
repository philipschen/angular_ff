import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderComponent } from './provider/provider.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { RegisterComponent } from './register/register.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterProdComponent } from './register-prod/register-prod.component';
import { RegisterConsComponent } from './register-cons/register-cons.component';

const routes: Routes = [
  {
    path: '',
    component: InputUserDataFormComponent
  },
  {
    path: 'user/:uid',
    component: DisplayUserDataComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent,
    ConsumerComponent,
    RegisterComponent,
    DisplayUserDataComponent,
    InputUserDataFormComponent,
    RegisterProdComponent,
    RegisterConsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add reactiveFormsModule into imports
    ReactiveFormsModule,
    // RouterModele
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  // add exprots with FormsModule and ReactiveFormsModule in it.
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
