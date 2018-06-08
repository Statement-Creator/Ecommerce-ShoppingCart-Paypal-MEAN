import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { DataService } from './data.service';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';

const routes = [
  {path: '', component: ShoppingListComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path:'login', component: AdminComponent},
  {path:'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingCartComponent,
    AdminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
