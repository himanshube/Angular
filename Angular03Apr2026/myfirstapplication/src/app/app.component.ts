import { Component, ElementRef, HostBinding, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './dependencies/employee.service';
import { LogMessage1Service } from './services/log-message1.service';
import { LogMessage2Service } from './services/log-message2.service';
import {NgForm} from '@angular/forms';
import { ReactiveFormsModule, FormControl,Validators,FormGroup } from '@angular/forms';

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
  myForm : FormGroup;

   constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', Validators.min(18)),
    });
  }

   submitForm() {
    const userAge = this.myForm.get('age')?.value;
    if (userAge < 18) {
      alert('Age must be 18 or older');
      return;
    } else if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
   
}
