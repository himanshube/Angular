import { Component, ElementRef, HostBinding, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './dependencies/employee.service';
import { LogMessage1Service } from './services/log-message1.service';
import { LogMessage2Service } from './services/log-message2.service';
import {NgForm} from '@angular/forms';
import { ReactiveFormsModule, FormControl,Validators,FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  FormsModule, CommonModule,ReactiveFormsModule],
  providers: [{provide:LogMessage1Service,useClass:LogMessage1Service},
    {provide:LogMessage1Service,useClass:LogMessage2Service}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(){
    const obervable = new Observable((observer)=>{
      observer.next("this is next value");
      observer.error("this is error value");

    }).subscribe({
      next(value)
      {
        console.log("received value: "+ value  )
      },
      error(err)
      {
        console.log("received error: "+ err  )
      }

    });
  }
  
   
}
