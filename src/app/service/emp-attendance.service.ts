import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpAttendanceService {

  constructor(
    private _http: HttpClient
  ) { }

  getEmpAtt(){
    return this._http.get('http://localhost:3000/empAttendance')
  }

  addEmpAtt(data:any){
    return this._http.post('http://localhost:3000/empAttendance', data)
  }

  getEmpAttById(id:number){
    return this._http.get(`http://localhost:3000/empAttendance/${id}`)
  }

  updateEmpAtt(id:number, data:any){
    return this._http.put(`http://localhost:3000/empAttendance/${id}`, data)
  }

  deleteAtt(id:number){
    return this._http.delete(`http://localhost:3000/empAttendance/${id}`)
  }

}
