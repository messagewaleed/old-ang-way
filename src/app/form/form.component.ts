import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
validateUserName(userName: any) {
  console.log(`you have typed in : ${userName}`);
  
}

}
