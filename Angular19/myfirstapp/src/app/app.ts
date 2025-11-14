import { Component, ElementRef, signal,ViewChild,HostBinding, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Child} from './child/child';

interface empinterface{
  id:number;
  name:string;
  role:string;

}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, Child],
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


  itemsArr : string[]=['item1','item2','item3'];  

  addItem(){
    const newintem = 'item' + (this.itemsArr.length + 1);
    this.itemsArr.push(newintem);
  }

  @ViewChild(Child) childcomponent? : Child;
  
  incrChildCounter()
  {
    console.log(this.childcomponent);
    this.childcomponent?.IncrementCount()
  }

    @ViewChild('colorInput') colorInput!: ElementRef;
    @HostBinding('style.backgroundColor') selectedcolor!:string;

    @HostListener('input',['$any($event.target).value']) onColorChange(color:string)
    {
    this.selectedcolor=color;
    }

}


