import { Component, OnInit } from '@angular/core';
import { NecessityService } from 'src/app/services/necessity/necessity.service';

import * as moment from 'moment';

@Component({
  selector: 'app-list-candidatures',
  templateUrl: './list-candidatures.component.html',
  styleUrls: ['./list-candidatures.component.scss']
})
export class ListCandidaturesComponent implements OnInit {
  necessities = []
  acceptedNecessities = []
  refusedNecessities = []
  finishedNecessities = []

  constructor(private necessityService : NecessityService) { }

  ngOnInit(): void {
    this.necessityService.getPending().subscribe( (result : any)=> {
      console.log(result.body)
      result.body.forEach(necessity => {
        this.necessities.push(necessity)
      });
    })

    this.necessityService.getAccepted().subscribe( (result : any)=> {
      console.log(result.body)
      result.body.forEach(necessity => {
        this.acceptedNecessities.push(necessity)
      });
    })

    this.necessityService.getRefused().subscribe( (result : any)=> {
      console.log(result.body)
      result.body.forEach(necessity => {
        this.refusedNecessities.push(necessity)
      });
    })

    this.necessityService.getFinished().subscribe( (result : any)=> {
      result.body.forEach(necessity => {
        this.finishedNecessities.push(necessity)
      });

      this.necessities.forEach(necessity => {
        necessity.data_inicio = moment(necessity.data_inicio).format('DD/MM/YY')
        necessity.data_fim = moment(necessity.data_fim).format('DD/MM/YY')

    });
    })
  }

}
