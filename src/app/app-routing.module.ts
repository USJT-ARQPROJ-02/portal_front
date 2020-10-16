import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNecessityComponent } from './pages/list-necessity/list-necessity.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterEntityComponent } from './pages/register-entity/register-entity.component';
import { RegisterNecessityComponent } from './pages/register-necessity/register-necessity.component';
import { RegisterVoluntaryComponent } from './pages/register-voluntary/register-voluntary.component';

import { RoleGuardService as RoleGuard } from './services/auth/role-guard.service';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent, },
  { path: 'voluntario', component: RegisterVoluntaryComponent },
  { path: 'entidade', component: RegisterEntityComponent },
  { 
    path: 'listar-necessidade',
    component: ListNecessityComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cadastro-necessidade',
    component: RegisterNecessityComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'entidade'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
