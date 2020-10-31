import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { CandidatureService } from 'src/app/services/candidature/candidature.service';
import { LoginService } from 'src/app/services/login/login.service';
import { NecessityService } from 'src/app/services/necessity/necessity.service';

import * as moment from 'moment';

@Component({
  selector: 'app-list-necessity',
  templateUrl: './list-necessity.component.html',
  styleUrls: ['./list-necessity.component.scss']
})
export class ListNecessityComponent implements OnInit {

  userName
  role
  necessities = []

  lat: number = -23.5375983
  lng: number = -46.5115991
  zoom: number = 15

  markers = []

  style = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#0080ff"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#0080ff"
            },
            {
                "saturation": "24"
            },
            {
                "lightness": "4"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#0066ff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#0080ff"
            },
            {
                "saturation": "32"
            },
            {
                "lightness": "28"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#0066ff"
            },
            {
                "saturation": "32"
            },
            {
                "lightness": "-8"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#0066ff"
            },
            {
                "lightness": "-8"
            },
            {
                "saturation": "8"
            }
        ]
    }
]

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

        this.markers.push(
          {
            lat : necessity.latitude,
            lng : necessity.longitude
          }
        )
      });

        this.necessities.forEach(necessity => {
            necessity.data_inicio = moment(necessity.data_inicio).format('DD/MM/YY')
            necessity.data_fim = moment(necessity.data_fim).format('DD/MM/YY')

        });
    })


    this.userName = localStorage.getItem('userName')
    this.role = localStorage.getItem('role')
    
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
