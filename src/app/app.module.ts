import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './components/user/userdetails/userdetails.component';
import { ListuserComponent } from './components/user/listuser/listuser.component';
import { LoginuserComponent } from './components/user/loginuser/loginuser.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UpdateuserComponent } from './components/user/updateuser/updateuser.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreatequizComponent } from './components/quiz/createquiz/createquiz.component';
import { ListquizComponent } from './components/quiz/listquiz/listquiz.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    ListuserComponent,
    LoginuserComponent,
    RegisterComponent,
    UpdateuserComponent,
    HomeComponent,
    NavbarComponent,
    CreatequizComponent,
    ListquizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
