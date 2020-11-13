import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNecessityComponent } from './pages/list-necessity/list-necessity.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterEntityComponent } from './pages/register-entity/register-entity.component';
import { RegisterNecessityComponent } from './pages/register-necessity/register-necessity.component';
import { RegisterVoluntaryComponent } from './pages/register-voluntary/register-voluntary.component';

import { RoleGuardService as RoleGuard } from './services/auth/role-guard.service';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
import { HomeEntityComponent } from './pages/home-entity/home-entity.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ListCandidaturesComponent } from './pages/list-candidatures/list-candidatures.component';
import { VoluntaryInfoComponent } from './pages/voluntary-info/voluntary-info.component';
import { HomeComponent } from './pages/home/home.component';
import { VoluntaryProfileComponent } from './pages/voluntary-profile/voluntary-profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'voluntario', component: RegisterVoluntaryComponent },
  { path: 'entidade', component: RegisterEntityComponent },
  { path: 'reset-password', component: ResetPasswordComponent, },
  { path: 'login', component: LoginComponent, },
  { 
    path: 'listar-necessidade',
    component: ListNecessityComponent,
    canActivate: [AuthGuard],
  },
  { 
    path: 'listar-candidaturas',
    component: ListCandidaturesComponent,
    canActivate: [AuthGuard],
  },
  { 
    path: 'meu-perfil',
    component: VoluntaryProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cadastro-necessidade',
    component: RegisterNecessityComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'entidade'
    }
  },
  {
    path: 'home-entidade',
    component: HomeEntityComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'entidade'
    }
  },
  {
    path: 'voluntario-info/:id',
    component: VoluntaryInfoComponent,
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
