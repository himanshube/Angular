import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './dependencies/employee.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  FormsModule, CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent   {  

  employees :any[];
  empid :number =0;
  emp:any;
  
  constructor(private e : EmployeeService)
  {
    this.employees = this.e.getemployees();
  }

  showdetails(id:number)
  {
    this.empid= id;
    this.emp = this.e.getemployeebyId(id);
  }


}