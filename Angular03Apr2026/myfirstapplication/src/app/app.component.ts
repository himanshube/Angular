import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChildComponent} from './child/child.component';
import { Child1Component } from "./child1/child1.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, FormsModule, CommonModule, ChildComponent, Child1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent   {

  @ViewChild("colorinput") colorpcker !: ElementRef;
  @HostBinding('style.backgroundColor') selectedcolor! : string;
  @HostListener('input',['$event.target.value']) onColorChange 
(color:string)
{
  this.selectedcolor=color;
}

  

}