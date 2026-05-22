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
import {of} from 'rxjs';
import {filter} from 'rxjs';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  response:any;
  loaddata:boolean =false;
constructor(private http:HttpClient)
{ 

}

getdata()
{
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
   this.response = data;
   this.loaddata=true;
  });
}

postdata()
{
 const user =
  {
    "id": 3,
    "name": "Johsdsadasn Doe",
    "email": "josdsadasdhn.doe@example.com"
  } 

  this.http.post('http://localhost:3000/users',user).subscribe((data)=>{
   console.log(data);
   this.loaddata=true;
  });
}

putdata()
{
 const user =
  {
    "id": 3,
    "name": "himansh Doe",
    "email": "dsdsadsadsadsadsadasdas.doe@example.com"
  } 

  this.http.put('http://localhost:3000/users/'+user.id,user).subscribe((data)=>{
   console.log(data);
   this.loaddata=true;
  });
}

   
}
