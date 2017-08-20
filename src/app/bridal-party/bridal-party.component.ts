import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-bridal-party',
  templateUrl: './bridal-party.component.html',
  styleUrls: ['./bridal-party.component.css']
})
export class BridalPartyComponent implements OnInit {
  bridalParty = {
    groomsmen: [
      {name: 'deji', role: 'Best Man', src: ''},
      {name: 'richard', role: 'Groomsman', src: ''},
      {name: 'marvin', role: 'Groomsman', src: ''},
      {name: 'yemi', role: 'Groomsman', src: ''},
      {name: 'anthony', role: 'Groomsman', src: ''}
    ],
    bridesmaids: [
      {name: 'rosa', role: 'Chief Bridesmaid', src: ''},
      {name: 'mary', role: 'Bridesmaid', src: ''},
      {name: 'jasmine', role: 'Bridesmaid', src: ''},
      {name: 'alex', role: 'Bridesmaid', src: ''},
    ]
  };

  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App) {
    const groomsmenCount = this.bridalParty.groomsmen.length;

    for (let i = 0; i < groomsmenCount; i++) {
      const groomsman = this.bridalParty.groomsmen[i];
      const storageRef = firebaseApp.storage().ref().child(`bridal-party/${groomsman.name}.jpg`);
      storageRef.getDownloadURL().then(url => {
        groomsman.src = url;
      });
    }

    const bridesmaidsCount = this.bridalParty.bridesmaids.length;

    for (let i = 0; i < bridesmaidsCount; i++) {
      const bridesmaid = this.bridalParty.bridesmaids[i];
      const storageRef = firebaseApp.storage().ref().child(`bridal-party/${bridesmaid.name}.jpg`);
      storageRef.getDownloadURL().then(url => {
        bridesmaid.src = url;
      });
    }

  }
  ngOnInit() {
  }

}
