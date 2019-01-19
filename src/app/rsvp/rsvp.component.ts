import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { Guest } from '../guest/guest.model';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  guest: Guest;
  items: any; //Observable<any[]>;
  guestName: string;
  submitted: boolean = false;
  rsvpClosed: boolean = true;

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('guests').valueChanges();
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

    if(Object.keys(this.guest.plusOne).length > 0) {
      this.guest.plusOne['firstName'] = this.upperCaseFirstLetter(this.lowerCase(this.guest.plusOne['firstName']));
      this.guest.plusOne['lastName'] = this.upperCaseFirstLetter(this.lowerCase(this.guest.plusOne['lastName']));
    }

    const guestsRef = db.list('guests');

    this.items.push(this.guest);
    this.submitted = true;
  }

  ngOnInit() {
  }

}
