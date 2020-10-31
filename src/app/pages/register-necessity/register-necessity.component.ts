import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { GeocodeService } from 'src/app/services/geocode/geocode.service';
import { NecessityService } from 'src/app/services/necessity/necessity.service';

import * as moment from 'moment';

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

  todayDate = new Date()

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

  constructor(private necessityService : NecessityService, private geocodeService : GeocodeService) { }

  registerFormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    tipo_voluntariado: new FormControl('', [Validators.required]),
    data_inicio: new FormControl('', [Validators.required]),
    data_fim: new FormControl('', [Validators.required])
  });


  matcher = new MyErrorStateMatcher();

  public errorHandling = (control: string, error: string) => {
    return this.registerFormGroup.controls[control].hasError(error);
  };

  send() {
    this.geocodeService.convert(this.registerFormGroup.value.endereco).subscribe((result : any) => {
      
      this.registerFormGroup.value.latitude = result.results[0].geometry.location.lat
      this.registerFormGroup.value.longitude = result.results[0].geometry.location.lng

      this.registerFormGroup.value.data_inicio = moment(this.registerFormGroup.value.data_inicio).format()
      this.registerFormGroup.value.data_fim = moment(this.registerFormGroup.value.data_fim).format()

      this.necessityService.register(this.registerFormGroup.value).subscribe((result) => {
        console.log(result);
        alert('Criado com sucesso')
      }, error => {
        alert('Houve um erro')
      });
      
    })
  }
}
