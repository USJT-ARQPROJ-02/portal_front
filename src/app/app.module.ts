import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterVoluntaryComponent } from './pages/register-voluntary/register-voluntary.component';
import { HeaderComponent } from './components/header/header.component';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RegisterEntityComponent } from './pages/register-entity/register-entity.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterNecessityComponent } from './pages/register-necessity/register-necessity.component';
import { ListNecessityComponent } from './pages/list-necessity/list-necessity.component';
import { HomeEntityComponent } from './pages/home-entity/home-entity.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AgmCoreModule } from '@agm/core';
import { ListCandidaturesComponent } from './pages/list-candidatures/list-candidatures.component';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { VoluntaryInfoComponent } from './pages/voluntary-info/voluntary-info.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterVoluntaryComponent,
    HeaderComponent,
    RegisterEntityComponent,
    LoginComponent,
    RegisterNecessityComponent,
    ListNecessityComponent,
    HomeEntityComponent,
    ResetPasswordComponent,
    ListCandidaturesComponent,
    VoluntaryInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdksnWRZphUOij5xt9bVg5cFGIRyte6NY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
