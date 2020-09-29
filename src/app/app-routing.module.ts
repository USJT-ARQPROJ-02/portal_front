import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterVoluntaryComponent } from './pages/register-voluntary/register-voluntary.component';


const routes: Routes = [
  { path: '', component: RegisterVoluntaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
