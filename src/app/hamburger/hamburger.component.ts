import { Component } from '@angular/core';

@Component({
  selector: 'hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent {
  isActive = false;

  onClick() {
    this.isActive = !this.isActive;
  }
}
