import { Component, OnInit } from '@angular/core';

import { Image } from '../image/image.model';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {
  hero = new Image('Dumebi & Ezeikel', '..', 'He who finds a wife finds a good thing, And obtains favor from the Lord.', 'Proverbs 18:22', '../../assets/img/proposal-2.jpg');

  constructor() { }

  ngOnInit() {
  }

}
