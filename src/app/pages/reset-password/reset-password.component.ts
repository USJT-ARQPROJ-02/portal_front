import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResetPasswordService } from 'src/app/services/resetPassword/reset-password.service';

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
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  tokenRecebido: boolean;

  constructor(private resetPasswordService: ResetPasswordService, private router: Router) { }

  ngOnInit(): void {
    this.tokenRecebido = false;
  }

  resetFormGroup = new FormGroup({
    email: new FormControl('', []),
    senha: new FormControl('', []),
    token: new FormControl('', [])
  });

  matcher = new MyErrorStateMatcher();

  public errorHandling = (control: string, error: string) => {
    return this.resetFormGroup.controls[control].hasError(error);
  };

  sendEmail() {
    this.resetPasswordService.sendEmail(this.resetFormGroup.get('email')).subscribe((result: any) => {
      if (result) {
        alert('Email enviado com sucesso')
      }
    }, error => {
      alert('Não foi possivel enviar email')
    });
  }

  trocarSenha() {
    this.resetPasswordService.resetSenha(this.resetFormGroup.value).subscribe((result: any) => {
      if (result) {
        alert('Senha alterada com sucesso')
      }
    }, error => {
      alert('Não foi possivel alterar senha')
    });
  }

  recebiToken() {
    this.tokenRecebido = true;
  }
}
