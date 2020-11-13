import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/services/donation/donation.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {

  receipt
  formData = new FormData()

  constructor(private donationService : DonationService) { }

  ngOnInit(): void {
  }

  handleUpload(event) {
    let files = event.target.files;
    
    this.formData = new FormData()

    this.formData.append('file', files)
  }

  send() {
    this.donationService.send(this.formData).subscribe((result : any) => {
      console.log(result)
    })
  }

}
