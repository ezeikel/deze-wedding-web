import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {
  hero = {
    title: 'Dumebi & Ezeikel',
    quote: 'He who finds a wife finds a good thing, And obtains favor from the Lord.',
    quoteRef: 'Proverbs 18:22',
    src: '' //'../../assets/img/prewed.jpg'
  }

  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App) {
    const storageRef = firebaseApp.storage().ref().child(`hero/hero.jpg`);
    storageRef.getDownloadURL().then(url => {
      this.hero.src = url;
    });
   }

  ngOnInit() {
  }

}
