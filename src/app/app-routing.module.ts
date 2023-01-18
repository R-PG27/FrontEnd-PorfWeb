import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEducationComponent } from './components/education/new-education.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'newedu', component: NewEducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
