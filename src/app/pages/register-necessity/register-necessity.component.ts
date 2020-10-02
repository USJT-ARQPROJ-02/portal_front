import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NecessityService } from 'src/app/services/necessity/necessity.service';

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
  selector: 'app-register-necessity',
  templateUrl: './register-necessity.component.html',
  styleUrls: ['./register-necessity.component.scss']
})
export class RegisterNecessityComponent {

  entityTypes = [
    'Animais',
    'Meio Ambiente',
    'Assistência social',
    'Cultura',
    'Saúde',
    'Meio ambiente',
    'Desenvolvimento e defesa de direitos',
    'Habitação',
    'Educação e Pesquisa'
  ]

  constructor(private necessityService : NecessityService) { }

  registerFormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    tipo_voluntariado: new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  public errorHandling = (control: string, error: string) => {
    return this.registerFormGroup.controls[control].hasError(error);
  };

  send() {
    this.necessityService.register(this.registerFormGroup.value).subscribe((result) => {
      console.log(result);
      alert('Criado com sucesso')
    }, error => {
      alert('Houve um erro')
    });
  }
}
