import { Component, ElementRef, HostBinding, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './dependencies/employee.service';
import { LogMessage1Service } from './services/log-message1.service';
import { LogMessage2Service } from './services/log-message2.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  FormsModule, CommonModule],
  providers: [{provide:LogMessage1Service,useClass:LogMessage1Service},
    {provide:LogMessage1Service,useClass:LogMessage2Service}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



submitform(myform:NgForm){
  if(myform.valid){

    const formvalue = JSON.stringify(myform.value);
    console.log(formvalue);
  }
}

  resetform(myform:NgForm){
  myform.reset();
  }

}
