import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-restcall',
  templateUrl: './restcall.component.html',
  styleUrl: './restcall.component.css'
})
export class RestcallComponent {

  userName : string = "";

  responseData !: any;

  constructor(private  httpClient : HttpClient){

  }

  ngOnInit(){
    
  }

  getGitHubUsers(){
    let obs = this.httpClient.get("https://api.github.com/users");

    obs.subscribe(response => {
      console.log(response);
      this.responseData = response;
    });
  }

  searchUserOnGitHub() {
    this.httpClient.get("https://api.github.com/users/" + this.userName)
    .subscribe((responseData) => {
      this.responseData =  responseData;
      console.log(this.responseData);
      
    })
    }

}
