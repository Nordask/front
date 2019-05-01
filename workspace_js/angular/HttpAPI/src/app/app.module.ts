import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleService } from './people.service';
import { MyLogHttpInterceptor } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PeopleService,
              {provide: HTTP_INTERCEPTORS, useClass: MyLogHttpInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
