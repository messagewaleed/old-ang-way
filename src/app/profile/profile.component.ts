import { Component, Input } from '@angular/core';
import { Profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {


  @Input('name') name !: string;

  @Input('profile') theProfile!: Profile;

  @Input('someValue') someValue !: string;

  //profile : any;

  isVisible : boolean = false;

  constructor(){
    
  }

  ngOnInit(){ //Lifecycle hook method
    // this.profile = {
    //   name: this.name,
    //   designation : 'Senior Software Engineer',
    //   skills: 'Java, Spring, Microservices',
    //   contact : ['9989888888']
    // }

    this.theProfile = {
      name: this.theProfile.name,
      designation : this.theProfile.designation,
      skills: this.theProfile.skills,
      contact : this.theProfile.contact
    }
  }

  toggleContact(){
    // console.log("Button was clicked...");
    this.isVisible = !this.isVisible;
    
  }

  searchUserOnGitHub() {

  }

}
