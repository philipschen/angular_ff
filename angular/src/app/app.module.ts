import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderComponent } from './provider/provider.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegisterComponent } from './register/register.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { Routes, RouterModule } from '@angular/router';

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
    AuthorizationComponent,
    RegisterComponent,
    DisplayUserDataComponent,
    InputUserDataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add reactiveFormsModule into imports
    ReactiveFormsModule,
    // RouterModele
    RouterModule.forRoot(routes)
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
