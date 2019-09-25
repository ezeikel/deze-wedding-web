import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  church = {
    name: 'Holy Cross RC Church',
    address: 'Sangley Road, Catford, London, SE6 2LD',
    imgSrc: null
  }

  reception = {
    name: 'Meridian Grand',
    address: 'Advent Way, London, N18 3AF',
    imgSrc: null
  }

  constructor(private storage: AngularFireStorage) {
    const church = this.storage.ref(`venues/holy-cross-church.jpg`);
    church.getDownloadURL().subscribe(src => this.church.imgSrc = src);

    const reception = this.storage.ref(`venues/meridian-grand.jpg`);
    reception.getDownloadURL().subscribe(src => this.reception.imgSrc = src);
   }

  ngOnInit() {
  }

}
