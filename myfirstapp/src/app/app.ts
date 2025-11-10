import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Child as childcomponent} from './child/child';


interface empinterface{
  id:number;
  name:string;
  role:string;

}

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule,childcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myfirstapp');
  display:boolean=true;
  displaystring : string = "parent dsadasdsadasdas";

  fullstack=[
    {name:'Angular',type:'Frontend'},
    {name:'NodeJS',type:'Backend'},
    {name:'MongoDB',type:'Database'}
  ]; 

  
  items : string []=['apple','bababa'];

  employees = signal<empinterface[]>([
    {id:1,name:'Alice',role:'Developer'},
    {id:2,name:'Bob',role:'Designer'},
    {id:3,name:'Charlie',role:'Manager'}
  ]);   
  age : number = 10;
  checkeligible()
  {
   console.log(this.age);
  }

  message : string = '';

  ReceivedChildEvent(event: string){
    this.message=event;

  }


}
