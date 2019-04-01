import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AccountModule } from "./account/account.module";
import { QuestionsModule } from "./questions/questions.module";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuestionsIndexComponent } from './questions-index/questions-index.component';
import { QuestionsNewComponent } from './questions-new/questions-new.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';


var myRoutes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "home/categories", component: CategoriesComponent},
  {path: "home/contact", component: ContactComponent},
  {path: "questions/index", component: QuestionsIndexComponent},
  {path: "newquestion", component: QuestionsNewComponent},
  {path: "viewquestion", component: QuestionsViewComponent},
];

var myRoutesModule = RouterModule.forRoot(myRoutes);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    QuestionsModule,
    myRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
