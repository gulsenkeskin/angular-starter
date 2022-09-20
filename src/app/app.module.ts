import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { AboutComponent } from './modules/general/about/about.component';
import { LoginComponent } from './modules/general/login/login.component';
import { SignupComponent } from './modules/general/signup/signup.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ContactModule } from './modules/general/contact/contact.module';
import { LoginModule } from './modules/general/login/login.module';
import { SignupModule } from './modules/general/signup/signup.module';
import { AboutModule } from './modules/general/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactModule,
    LoginModule,
    SignupModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
