import { Component, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature/candidature.service';

@Component({
  selector: 'app-home-entity',
  templateUrl: './home-entity.component.html',
  styleUrls: ['./home-entity.component.scss']
})
export class HomeEntityComponent implements OnInit {

  necessities = []

  constructor(private candidatureService : CandidatureService) { }

  ngOnInit(): void {
    this.candidatureService.getAll().subscribe( (result : any)=> {
      console.log(result)
      result.forEach(necessity => {
        this.necessities.push(necessity)
      });
    })
  }

  acceptCandidature(id) {
    let response = {
      status : true
    }

    this.candidatureService.update(response, id).subscribe(result => {
      alert(result)
    })
  }

  refuseCandidature(id) {
    let response = {
      status : false
    }

    this.candidatureService.update(response, id).subscribe(result => {
      alert(result)
    })
  }

}
