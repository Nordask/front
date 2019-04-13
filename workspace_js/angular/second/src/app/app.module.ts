import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { BankingComponent } from './banking/banking.component';
import { SavingsAccountComponent } from './savings-account/savings-account.component';
import { CurrentAccountComponent } from './current-account/current-account.component';
import { LoanAccountComponent } from './loan-account/loan-account.component';

var myRoutes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "products/:productId", component: ProductsComponent},
  {path: "banking", component: BankingComponent, children: [
    {path: "SavingsAccount", component: SavingsAccountComponent}, 
    {path: "CurrentAccount", component: CurrentAccountComponent}, 
    {path: "LoanAccount", component: LoanAccountComponent}  
  ]}
]

var routes = RouterModule.forRoot(myRoutes, {useHash: true}); 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    BankingComponent,
    SavingsAccountComponent,
    CurrentAccountComponent,
    LoanAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
