import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-end-necessity-details',
  templateUrl: './end-necessity-details.component.html',
  styleUrls: ['./end-necessity-details.component.scss']
})
export class EndNecessityDetailsComponent implements OnInit {

  necessities = []
  idEntidade
  images = []
  fd = new FormData();

  constructor(private necessityService : NecessityService, private router : Router, private route: ActivatedRoute) { }

  registerFormGroup = new FormGroup({
    feedback: new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  public errorHandling = (control: string, error: string) => {
    return this.registerFormGroup.controls[control].hasError(error);
  };

  ngOnInit(): void {
    
    this.idEntidade = localStorage.getItem('id_entidade')
    console.log(this.idEntidade)

    this.necessityService.getNecessityById(this.idEntidade).subscribe( (result : any)=> {
      console.log(result)
      result.body.forEach(necessity => {
        this.necessities.push(necessity)
      });
    })

  }

  
  saveFile(event) {
    let files = event.target.files;
    for (var i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        this.images.push(reader.result);
      };
    }
    
    console.log(this.images)
  }


  send() {

    this.images.forEach(image => {
      this.fd.append('files', image);
    })

    this.fd.append('feedback', this.registerFormGroup.value.feedback);


    this.necessityService.endNecessity(this.fd,this.route.snapshot.queryParams['id']).subscribe((result : any) => {
      console.log(result)
      alert('Necessidade finalizada com sucesso!')
    })
  }
}
