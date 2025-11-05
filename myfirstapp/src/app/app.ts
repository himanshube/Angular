import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myfirstapp');
  display:boolean=true;
  fullstack=[
    {name:'Angular',type:'Frontend'},
    {name:'NodeJS',type:'Backend'},
    {name:'MongoDB',type:'Database'}
  ]; 
  
  items : string []=['apple','bababa'];
}
