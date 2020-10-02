import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterEntityComponent } from './pages/register-entity/register-entity.component';
import { RegisterVoluntaryComponent } from './pages/register-voluntary/register-voluntary.component';

import { 
  AuthGuardService as AuthGuard 
} from './services/auth/auth-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'voluntario', component: RegisterVoluntaryComponent, canActivate: [AuthGuard]},
  { path: 'entidade', component: RegisterEntityComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
