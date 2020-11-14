import { Component, OnInit } from '@angular/core';
import { NecessityService } from 'src/app/services/necessity/necessity.service';
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './css/skel.css', './css/style.css', './css/style-xlarge.css']
})
export class HomeComponent implements OnInit {

  lastNecessities = [];

  constructor(private necessityService: NecessityService) { }

  ngOnInit(): void {
    this.necessityService.get().subscribe((data: any) => {
      if (data) {
        data.body.forEach(necessity => {
          necessity.data_inicio = moment(necessity.data_inicio).format('DD/MM/YY')
          necessity.data_fim = moment(necessity.data_fim).format('DD/MM/YY')
          if(this.lastNecessities.length < 3)
            this.lastNecessities.push(necessity);
        })
      }
    })
  }
}
