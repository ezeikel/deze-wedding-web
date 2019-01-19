import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  images = [];

  constructor(private storage: AngularFireStorage) {
    const count = 29;

    for (let i = 1; i <= count; i++) {
      const storageRef = this.storage.ref(`prewed/prewed-${i}.jpg`);
      this.images.push(storageRef.getDownloadURL());
    }
  }

  ngOnInit() {}
}
