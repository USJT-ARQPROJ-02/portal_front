import { Component, OnInit } from '@angular/core';
import { NecessityService } from 'src/app/services/necessity/necessity.service';
import * as Chart from 'chart.js'
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  descricaoYear = [];
  quantidadeYear = [];
  chartYear;
  descricaoMonth = [];
  quantidadeMonth = [];
  chartMont;

  constructor(private necessityService: NecessityService) { }

  ngOnInit(): void {
    this.necessityService.getDashboard().subscribe((necessidades: any) => {
      necessidades.body.forEach(x => {
        if (x.year) {
          this.descricaoYear.push(x.year);
          this.quantidadeYear.push(x.count);
        }
        if(x.month){
          this.descricaoMonth.push(moment(x.month).format('MM/YY'));
          this.quantidadeMonth.push(x.count);
        }
      });
      this.makeGraphicYear();
      this.makeGraphicMonth();
    })
  }

  makeGraphicYear() {
    this.chartYear = new Chart('yearchart', {
      type: 'doughnut',
      data: {
        labels:
          this.descricaoYear,
        datasets: [
          {
            data: this.quantidadeYear,
            hoverBorderWidth: 4,
            hoverBorderColor: '#ffffff',
            hoverBackgroundColor: '#17174b',
            borderWidth: 1,
            borderAlign: 'center',
            borderColor: '#ffffff',
            backgroundColor: [
              "#ff6384",
              "#36a2eb",
              "#17174b"
            ],
            fill: true
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Necessidades encerradas anualmente',
          position: 'top'
        },
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  }

  makeGraphicMonth() {
    this.chartYear = new Chart('monthchart', {
      type: 'doughnut',
      data: {
        labels:
          this.descricaoMonth,
        datasets: [
          {
            data: this.quantidadeMonth,
            hoverBorderWidth: 4,
            hoverBorderColor: '#ffffff',
            hoverBackgroundColor: '#17174b',
            borderWidth: 1,
            borderAlign: 'center',
            borderColor: '#ffffff',
            backgroundColor: [
              "#ff6384",
              "#36a2eb",
              "#17174b"
            ],
            fill: true
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Necessidades encerradas mensalmente em 2020',
          position: 'top'
        },
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  }
}
