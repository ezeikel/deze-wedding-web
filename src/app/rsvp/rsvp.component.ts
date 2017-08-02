import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Guest } from '../guest/guest.model';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  guest: Guest;
  items: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/guests');
    this.guest = new Guest('','','',false);
  }

  submit() {
    this.items.push(this.guest);
  }

  ngOnInit() {
  }

}
