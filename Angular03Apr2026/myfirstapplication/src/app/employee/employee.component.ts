import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  id:string = '';

  // constructor(private route :ActivatedRoute)
  //   {
  //     const params = this.route.snapshot.params;
  //     this.id = params['id'];
  //   }

  constructor(private router :Router){

  }

  navigatetodetail()
  {
    this.router.navigate(['/home']);
  }
  
}
