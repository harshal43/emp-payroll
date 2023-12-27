import { Component, OnInit } from '@angular/core';
import { EmpAttendanceService } from 'src/app/service/emp-attendance.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit{

  empArr:any[]=[];
  empAttArr:any[]=[];

  empObj: any={};

  constructor(
    private _empService: EmployeeService,
    private _empAttService: EmpAttendanceService
  ){
    this.attReset();
  }

  ngOnInit(): void {
    this.loadAllEmployee()
    this.loadEmpAtt()
  }

  attReset(){
    this.empObj = {
    'empName':'',
    'time':'',
    'date':'',
    'isFull':'',
    'id':''
    }
  }

  loadAllEmployee(){
    this._empService.getAllEmployee().subscribe({
      next:(res: any)=>{
        this.empArr = res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  loadEmpAtt(){
    this._empAttService.getEmpAtt().subscribe({
      next:(res: any)=>{
        this.empAttArr = res
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onSave(){
    this._empAttService.addEmpAtt(this.empObj).subscribe({
      next:()=>{
        alert("Attandance regestered!")
        this.loadEmpAtt()
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onUpdate(id:number){
    this._empAttService.updateEmpAtt(id,this.empObj).subscribe({
      next:()=>{
        alert("Attandance Updated!")
        this.loadEmpAtt()
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onEdit(id:number){
    this._empAttService.getEmpAttById(id).subscribe({
      next:(res)=>{
        this.empObj = res;
      }
    })
  }

  onDelete(id:number){
    this._empAttService.deleteAtt(id).subscribe({
      next:()=>{
        alert("Deleted!")
        this.loadEmpAtt()
      }
    })
  }

}
