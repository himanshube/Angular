import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "This is static data binding";
  title = 'myAngularProject';
  variable="sdsad";

  display(msg:string){
    alert("This is angular" + msg);
  }

  count:number=0;
  counter(msg:string){
    msg==='inc'? this.count++:this.count--;   
  }

  onkeypress()
  {
    console.log("sadsdsad");
  
  }


}
