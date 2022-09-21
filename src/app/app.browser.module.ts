import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [],
  imports: [
    AppModule,
    BrowserModule.withServerTransition({ appId: 'angular-starter' }),
  ],
  bootstrap: [AppComponent]

})
export class AppBrowserModule { }
