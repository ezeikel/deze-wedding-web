import { Component, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';
import 'slick-carousel/slick/slick';
import { Image } from '../image/image.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {
  images: Image[] = [
    new Image('Bonkaz', 'Bonkaz performing at his headline show', '../../assets/img/proposal-1.jpg'),
    new Image('Bonkaz', 'Bonkaz performing at his headline show', '../../assets/img/proposal-2.jpg'),
    new Image('Bonkaz', 'Bonkaz performing at his headline show', '../../assets/img/proposal-3.jpg')
  ];
  constructor() { }

  ngAfterViewInit() {
    $('.hero-carousel').slick({
      autoplay: true,
      dots: false,
      fade: true,
      arrows: false
    });
  }

}
