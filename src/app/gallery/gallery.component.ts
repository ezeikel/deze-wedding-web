import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [];

  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App) {
    const count = 29;

    for (let i = 1; i <= count; i++) {
      const storageRef = firebaseApp.storage().ref().child(`prewed/prewed-${i}.jpg`);
      storageRef.getDownloadURL().then(url => {
        this.images.push(url);
      });

    }
  }

  ngOnInit() {
  }

}
