import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee;

  constructor(private employeeService: EmployeeService, private router: Router){}

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=> {
      console.log(data)
    }, error => console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    // this.saveEmployee()
    // this.goToEmployeeList()

    //console.log(this.employee);
    //this.employeeService.createEmployee(this.employee).subscribe(data => {
    //  this.router.navigate(['/employees']);
    //}, error => console.log(error));

    const emailPattern = /^[^\s@]+@[^\s@]+$/;
    const validEmployeePattern = /^[^\s\t]+$/;

    if (
      validEmployeePattern.test(this.employee.firstName.trim()) && 
      validEmployeePattern.test(this.employee.lastName.trim()) && 
      emailPattern.test(this.employee.emailId.trim()) && 
      this.employee.emailId.endsWith("@ems.com")) {
      this.employeeService.createEmployee(this.employee).subscribe(
        data => {
          this.router.navigate(['/employees']);
        }, 
        error => console.log(error)
      );
    } else {
      if (
        this.employee.firstName.trim() === '' || 
        this.employee.lastName.trim() === '' || 
        this.employee.emailId.trim() === ''
      ) {
        alert("Please don't leave the fields empty!");
      } else if (
        !validEmployeePattern.test(this.employee.firstName) || 
        !validEmployeePattern.test(this.employee.lastName) || 
        /\s/.test(this.employee.emailId)
      ) {
        alert("Fields should not contain spaces or tabs!");
      } else if (!emailPattern.test(this.employee.emailId)) {
        alert("Email must contain exactly one @ symbol");
      } else if (!this.employee.emailId.endsWith("@ems.com")) {
        alert("Email must be of domain @ems.com");
      }
    }
  }
}
