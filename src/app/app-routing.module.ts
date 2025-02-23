import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginuserComponent } from './components/user/loginuser/loginuser.component';
import { UserdetailsComponent } from './components/user/userdetails/userdetails.component';
import { ListuserComponent } from './components/user/listuser/listuser.component';
import { CreatequizComponent } from './components/quiz/createquiz/createquiz.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'listuser', component: ListuserComponent },
  { path: 'details', component: UserdetailsComponent },
  { path: 'details/:id', component: UserdetailsComponent },
  { path: 'loginuser', component: LoginuserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createquiz/:id', component: CreatequizComponent },
  { path: 'createquiz', component: CreatequizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
