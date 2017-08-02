import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  guest: {};
  items: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/guests');
  }

  submit() {
    this.items.push({firstName: 'Ezeikel', lastName: 'Pemberton', email: 'ezeikelpemberton@gmail.com', plusOne: 'Y'});
  }

  ngOnInit() {
  }

}
