import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 private  employees = [
    { id: 1, name: 'Alice Johnson', department: 'HR', location: 'New York', phone: '555-1234' },
    { id: 2, name: 'Bob Smith', department: 'Engineering', location: 'San Francisco', phone: '555-5678' },
    { id: 3, name: 'Charlie Brown', department: 'Marketing', location: 'Chicago', phone: '555-8765' },
    { id: 4, name: 'Diana Prince', department: 'Finance', location: 'Boston', phone: '555-4321' },
    { id: 5, name: 'Ethan Hunt', department: 'Operations', location: 'Seattle', phone: '555-2468' }
  ];

  getemployees(){

    return this.employees;

  }

  getemployeebyId(id:number)
  {
    return this.employees.find(e=>e.id===id);
  }
}
