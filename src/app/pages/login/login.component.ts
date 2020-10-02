import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  types = ['Entidade', 'Voluntário']
  type

  constructor(private loginService : LoginService, private router: Router) { }

  registerFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required])
  });


  matcher = new MyErrorStateMatcher();

  public errorHandling = (control: string, error: string) => {
    return this.registerFormGroup.controls[control].hasError(error);
  };

  send() {
    if (this.type == 'Entidade') {
      this.loginService.loginEntity(this.registerFormGroup.value).subscribe((result: any) => {
        localStorage.setItem('token', result.token);
        this.router.navigate(['/entidade']);
      }, error => {
        alert('Dados incorretos, tente novamente')
      });
    } else {
      this.loginService.loginVoluntary(this.registerFormGroup.value).subscribe((result: any) => {
        localStorage.setItem('token', result.token);
        this.router.navigate(['/voluntario']);
      }, error => {
        alert('Dados incorretos, tente novamente')
      });
    }
  }

}
