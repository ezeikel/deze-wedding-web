import { Component } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  items: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/items');
  }
}
