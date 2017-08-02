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

  submitted: boolean = false;

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/guests');
    this.guest = new Guest('','','','');
  }

  onSubmit() {
    this.items.push(this.guest);
    this.submitted = true;
  }

  ngOnInit() {
  }

}
