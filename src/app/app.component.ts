import { Component } from '@angular/core';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'old-ang-way';
  profile !: Profile;

  constructor(){
    this.profile = new Profile();
    this.profile.name = "Vinay";
    this.profile.designation = "Software Engineering Associate";
    this.profile.skills = "HTML, CSS, TS, Ajax, Node";
    this.profile.contact = ['9989999999', 'vinay@gmail.com'];
  }




}

// ng new old-ang-way --no-standalone


