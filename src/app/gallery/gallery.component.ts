import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [];

  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App, private db: AngularFireDatabase) {
    const count = 29;

    for (let i = 1; i <= count; i++) {
      const storageRef = firebaseApp.storage().ref().child(`prewed/prewed-${i}.jpg`);
      storageRef.getDownloadURL().then(url => {
        this.images.push(url);
      });

    }
  }


  // images = [
  //   '../../assets/img/prewed/prewed-1.jpg',
  //   '../../assets/img/prewed/prewed-2.jpg',
  //   '../../assets/img/prewed/prewed-3.jpg',
  //   '../../assets/img/prewed/prewed-4.jpg',
  //   '../../assets/img/prewed/prewed-5.jpg',
  //   '../../assets/img/prewed/prewed-6.jpg',
  //   '../../assets/img/prewed/prewed-7.jpg',
  //   '../../assets/img/prewed/prewed-8.jpg',
  //   '../../assets/img/prewed/prewed-9.jpg',
  //   '../../assets/img/prewed/prewed-10.jpg',
  //   '../../assets/img/prewed/prewed-11.jpg',
  //   '../../assets/img/prewed/prewed-12.jpg',
  //   '../../assets/img/prewed/prewed-13.jpg',
  //   '../../assets/img/prewed/prewed-14.jpg',
  //   '../../assets/img/prewed/prewed-15.jpg',
  //   '../../assets/img/prewed/prewed-16.jpg',
  //   '../../assets/img/prewed/prewed-17.jpg',
  //   '../../assets/img/prewed/prewed-18.jpg',
  //   '../../assets/img/prewed/prewed-19.jpg',
  //   '../../assets/img/prewed/prewed-20.jpg',
  //   '../../assets/img/prewed/prewed-21.jpg',
  //   '../../assets/img/prewed/prewed-22.jpg',
  //   '../../assets/img/prewed/prewed-23.jpg',
  //   '../../assets/img/prewed/prewed-24.jpg',
  //   '../../assets/img/prewed/prewed-25.jpg',
  //   '../../assets/img/prewed/prewed-26.jpg',
  //   '../../assets/img/prewed/prewed-27.jpg',
  //   '../../assets/img/prewed/prewed-28.jpg',
  //   '../../assets/img/prewed/prewed-29.jpg'
  // ];

  ngOnInit() {
  }

}
