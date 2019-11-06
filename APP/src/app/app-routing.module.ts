import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup-component/signup-component.component';
import { LoginComponent } from './components/login-component/login-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'signup'},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuardService]},
  {path: '**', redirectTo:'signup'}];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
