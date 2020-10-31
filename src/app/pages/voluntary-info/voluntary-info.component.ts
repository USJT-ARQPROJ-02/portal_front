import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NecessityService } from 'src/app/services/necessity/necessity.service';

@Component({
  selector: 'app-voluntary-info',
  templateUrl: './voluntary-info.component.html',
  styleUrls: ['./voluntary-info.component.scss']
})
export class VoluntaryInfoComponent implements OnInit {
  private sub: any;
  id
  necessities = []

  constructor(private necessityService : NecessityService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.necessityService.getFinishedById(this.id).subscribe( (result : any)=> {
      console.log(result.body)
      result.body.forEach(necessity => {
        this.necessities.push(necessity)
      });
    })
  }


}
