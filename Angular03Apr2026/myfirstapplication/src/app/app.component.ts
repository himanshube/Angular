import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChildComponent} from './child/child.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, FormsModule,CommonModule,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {

  parentvalue :string ="parentvalue";

  ngOnInit():void{

    console.log("App component initializesd");

  }

users  = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

age:number = 10;
islegible:boolean=false;
isauthorized :boolean =true;

checkeligibility(){
  
 if(this.age>=18){
   this.islegible=true;
 }else{
   this.islegible=false;
 }

}

}