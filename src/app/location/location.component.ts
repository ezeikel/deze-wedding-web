import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  church = {
    name: 'Holy Cross RC Church',
    address: 'Sangley Road, Catford, London, SE6 2LD',
    imgSrc: ''
  }

  reception = {
    name: 'Meridian Grand',
    address: 'Advent Way, London, N18 3AF',
    imgSrc: ''
  }

  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App) {

    const church = firebaseApp.storage().ref().child(`venues/holy-cross-church.jpg`);
    church.getDownloadURL().then(url => {
      this.church.imgSrc = url;
    });

    const reception = firebaseApp.storage().ref().child(`venues/meridian-grand.jpg`);
    reception.getDownloadURL().then(url => {
      this.reception.imgSrc = url;
    });

   }

  ngOnInit() {
  }

}
