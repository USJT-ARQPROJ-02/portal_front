import { Component, OnInit } from '@angular/core';
import { NecessityService } from 'src/app/services/necessity/necessity.service';

@Component({
  selector: 'app-list-candidatures',
  templateUrl: './list-candidatures.component.html',
  styleUrls: ['./list-candidatures.component.scss']
})
export class ListCandidaturesComponent implements OnInit {
  necessities = []

  constructor(private necessityService : NecessityService) { }

  ngOnInit(): void {
    this.necessityService.getPending().subscribe( (result : any)=> {
      console.log(result.body)
      result.body.forEach(necessity => {
        this.necessities.push(necessity)
      });
    })
  }

}
