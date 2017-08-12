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
  guestName: string;
  submitted: boolean = false;

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/guests');
    this.guest = new Guest('','','', false, {});
  }

  upperCaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  lowerCase(string) {
    return string.toLowerCase();
  }

  onSubmit() {
    this.guest.firstName = this.upperCaseFirstLetter(this.lowerCase(this.guest.firstName));
    this.guest.lastName = this.upperCaseFirstLetter(this.lowerCase(this.guest.lastName));
    this.guestName = this.guest.firstName;

    if(this.guest.plusOne) {
      this.guest.plusOne['firstName'] = this.upperCaseFirstLetter(this.lowerCase(this.guest.plusOne['firstName']));
      this.guest.plusOne['lastName'] = this.upperCaseFirstLetter(this.lowerCase(this.guest.plusOne['lastName']));
    }

    this.items.push(this.guest);
    this.submitted = true;
  }

  ngOnInit() {
  }

}
