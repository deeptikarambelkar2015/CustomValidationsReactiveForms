import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'teams', component:TeamsComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'about', component:AboutComponent},
  {path:'signup',component:SignUpComponent},
  {path:'', redirectTo:'about', pathMatch:'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
