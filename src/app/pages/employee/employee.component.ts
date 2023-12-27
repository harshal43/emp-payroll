import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeArr: any[] = [];

  employeeObj: any = {}

  constructor(
    private _empSer: EmployeeService
  ) {
    this.resetObj();
  }

  resetObj(){
    this.employeeObj={
    'id':'',
    'empName':'',
    'empContactNo':'',
    'empAltContactNo':'',
    'empEmail':'',
    'addressLine1':'',
    'addressLine2':'',
    'pincode':'',
    'city':'',
    'state':'',
    'bankName':'',
    'ifsc':'',
    'accountNo':'',
    'bankBranch':'',
    'salary': ''
    }
  }

  ngOnInit(): void {
    this.loadAllEmployee();
  }

  loadAllEmployee(){
    this._empSer.getAllEmployee().subscribe({
      next:(res: any)=>{
        this.employeeArr = res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onSave(){
    this._empSer.addEmployee(this.employeeObj).subscribe({
      next:()=>{
        alert('Employee added successfully!')
        this.loadAllEmployee();
        this.resetObj();
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onEdit(id: number){
    this._empSer.getEmployeeById(id).subscribe({
      next:(res)=>{
        this.employeeObj = res
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onUpdate(id:number){
    this._empSer.updateEmployee(id,this.employeeObj).subscribe({
      next:()=>{
        alert("Employee updated!")
        this.loadAllEmployee();
        this.resetObj();
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onDelete(id:number){
    this._empSer.deleteEmployee(id).subscribe({
      next:()=>{
        alert("Employee deleted successfully");
        this.loadAllEmployee();
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
