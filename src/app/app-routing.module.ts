import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePComponent } from './People/home-p/home-p.component';
import { HomeAComponent } from './Animals/home-a/home-a.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'persons', component: HomePComponent , },
  {path:'pets', component: HomeAComponent},
  {path:'admin', component: AdminComponent , canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
