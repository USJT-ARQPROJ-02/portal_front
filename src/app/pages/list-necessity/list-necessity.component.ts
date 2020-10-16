import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { CandidatureService } from 'src/app/services/candidature/candidature.service';
import { LoginService } from 'src/app/services/login/login.service';
import { NecessityService } from 'src/app/services/necessity/necessity.service';

@Component({
  selector: 'app-list-necessity',
  templateUrl: './list-necessity.component.html',
  styleUrls: ['./list-necessity.component.scss']
})
export class ListNecessityComponent implements OnInit {

  userName
  necessities = []

  constructor(private loginService : LoginService, private necessityService : NecessityService, private candidatureService : CandidatureService) {}

  ngOnInit(): void {

    this.loginService.getUserData().subscribe( (result : any) => {
      if (result.length != 0) {
        this.userName = result.nome
        localStorage.setItem('userName', result.nome)
      } else {
        console.log('ta vazio')
      }
    })

    this.necessityService.get().subscribe( (result : any)=> {
      result.body.forEach(necessity => {
        this.necessities.push(necessity)
      });
    })

    this.userName = localStorage.getItem('userName')
  }

  candidature(id) {
    const response = {
      necessidade_id: id
    }

    this.candidatureService.post(response).subscribe(result => {
      alert('candidatado com sucesso')
    }, error => {
      alert('houve um erro')
    })
  }


}
