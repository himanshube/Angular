import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  fisrtname:string = "Angular tutoial";
  angularversion = "18";
  version : number =19;
  isactive: boolean = false;
  currentdate:Date = new Date();
  inputtype:string = "radio";
  selectedstate : string = "";
  
  showWelcomeMessage() {
    alert("woleome to angular " + this.angularversion + " tutorial");

  }
  showmessage(message:string){

     alert("woleome to angular " + message + " tutorial");

  }

}
