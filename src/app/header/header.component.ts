import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mobileMenuActive: boolean;

  constructor() {
    this.mobileMenuActive = false;
  }

  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }

  ngOnInit() {
  }

}
