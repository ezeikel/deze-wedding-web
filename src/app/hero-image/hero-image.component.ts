import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
@Component({
  selector: "app-hero-image",
  templateUrl: "./hero-image.component.html",
  styleUrls: ["./hero-image.component.css"]
})
export class HeroImageComponent implements OnInit {
  hero = {
    title: "Dumebi & Ezeikel",
    quote:
      "He who finds a wife finds a good thing, And obtains favor from the Lord.",
    quoteRef: "Proverbs 18:22",
    src: null
  };

  constructor(private storage: AngularFireStorage) {
    const storageRef = this.storage.ref(`hero/hero.jpg`);
    storageRef.getDownloadURL().subscribe(src => this.hero.src = src)
  }

  ngOnInit() {}
}
