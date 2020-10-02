import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { VoluntaryService } from 'src/app/services/voluntary/voluntary.service';

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
  selector: 'app-register-voluntary',
  templateUrl: './register-voluntary.component.html',
  styleUrls: ['./register-voluntary.component.scss'],
})
export class RegisterVoluntaryComponent {
  constructor(private voluntaryService: VoluntaryService) { }

  registerFormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cpf_cnpj: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(11),
    ]),
    endereco: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  public errorHandling = (control: string, error: string) => {
    return this.registerFormGroup.controls[control].hasError(error);
  };

  send() {
    this.voluntaryService.register(this.registerFormGroup.value).subscribe((result) => {
        console.log(result);
        alert('Criado com sucesso')
      }, error => {
        alert('Houve um erro')
      });
  }
}
