import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  images = [
    '../../assets/img/prewed-1.jpg',
    '../../assets/img/prewed-2.jpg',
    '../../assets/img/prewed-3.jpg',
    '../../assets/img/prewed-4.jpg',
    '../../assets/img/prewed-5.jpg',
    '../../assets/img/prewed-6.jpg'
  ];

  ngOnInit() {
  }

}
