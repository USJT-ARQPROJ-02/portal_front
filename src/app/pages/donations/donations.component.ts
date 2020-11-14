import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/services/donation/donation.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {

  receipt
  selectedFile: File = null;
  fd = new FormData();


  constructor(private donationService : DonationService) { }

  ngOnInit(): void {
  }

  createFormData(event) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file', this.selectedFile);
  }

  send() {
    this.donationService.send(this.fd).subscribe((result : any) => {
      console.log(result)
      alert('Recibo enviado com sucesso!')
    })
  }


}
