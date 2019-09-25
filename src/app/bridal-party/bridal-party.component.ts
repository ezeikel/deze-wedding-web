import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
@Component({
  selector: 'app-bridal-party',
  templateUrl: './bridal-party.component.html',
  styleUrls: ['./bridal-party.component.css']
})
export class BridalPartyComponent implements OnInit {
  bridalParty = {
    groomsmen: [
      {name: 'deji', role: 'Best Man', src: null},
      {name: 'richard', role: 'Groomsman', src: null},
      {name: 'marvin', role: 'Groomsman', src: null},
      {name: 'yemi', role: 'Groomsman', src: null},
      {name: 'anthony', role: 'Groomsman', src: null}
    ],
    bridesmaids: [
      {name: 'rosa', role: 'Chief Bridesmaid', src: null},
      {name: 'mary', role: 'Bridesmaid', src: null},
      {name: 'jasmine', role: 'Bridesmaid', src: null},
      {name: 'alex', role: 'Bridesmaid', src: null},
    ]
  };

  constructor(private storage: AngularFireStorage) {
    const groomsmenCount = this.bridalParty.groomsmen.length;

    for (let i = 0; i < groomsmenCount; i++) {
      const groomsman = this.bridalParty.groomsmen[i];
      const storageRef = this.storage.ref(`bridal-party/${groomsman.name}.jpg`);

      //groomsman.src = storageRef.getDownloadURL();
      storageRef.getDownloadURL().subscribe(val => groomsman.src = val);
    }

    const bridesmaidsCount = this.bridalParty.bridesmaids.length;
    this.storage.ref
    for (let i = 0; i < bridesmaidsCount; i++) {
      const bridesmaid = this.bridalParty.bridesmaids[i];
      const storageRef = this.storage.ref(`bridal-party/${bridesmaid.name}.jpg`);

      //bridesmaid.src = storageRef.getDownloadURL();
      storageRef.getDownloadURL().subscribe(val => bridesmaid.src = val);
    }

  }
  ngOnInit() {
  }

}
