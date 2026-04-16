import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
display:boolean=true;
quantity:number =1;
itemperquantuyy :number =100;

  title = 'myfirstapplication';
  msg="India is best";
  counter:number =0;
  staticstring :string ="yjid sdiosa ";

   increment(str :string)
  {
    str=="in"?this.counter++:this.counter--;
   
  }
  decrement()
  {
    this.counter--;
  }
  onkeypress(event:any)
  {
    console.log(event.target.value)
  }
}
