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
export class AppComponent   {

  displaystring : string = "hellw";

  update()
  {
    this.displaystring="updated";
  }

  

}