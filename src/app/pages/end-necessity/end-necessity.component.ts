import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NecessityService } from 'src/app/services/necessity/necessity.service';

@Component({
  selector: 'app-end-necessity',
  templateUrl: './end-necessity.component.html',
  styleUrls: ['./end-necessity.component.scss']
})
export class EndNecessityComponent implements OnInit {

  necessities = []
  idEntidade

  constructor(private necessityService : NecessityService, private router : Router) { }

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


  openMoreInfo(id, event) {
    event.preventDefault()
    this.router.navigate(['/finalizar-necessidade'], {queryParams: {'id': id}});
  }

}
