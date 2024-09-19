import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profile : any;

  isVisible : boolean = false;

  constructor(){
    this.profile = {
      name: 'Shreya S',
      designation : 'Senior Software Engineer',
      skills: 'Java, Spring, Microservices',
      contact : ['9989888888']
    }
  }

  toggleContact(){
    // console.log("Button was clicked...");
    this.isVisible = !this.isVisible;
    
  }

}
