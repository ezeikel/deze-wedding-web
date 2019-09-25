import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { firebaseConfig } from './../environments/firebase.config';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AppComponent } from './app.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { HeaderComponent } from './header/header.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { StoryComponent } from './story/story.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BridalPartyComponent } from './bridal-party/bridal-party.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'story', component: StoryComponent },
  { path: 'location', component: LocationComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'bridal-party', component: BridalPartyComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    CapitalizePipe,
    AppComponent,
    HamburgerComponent,
    HeaderComponent,
    HeroImageComponent,
    StoryComponent,
    ScheduleComponent,
    GalleryComponent,
    BridalPartyComponent,
    RsvpComponent,
    PageNotFoundComponent,
    LocationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    )
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
