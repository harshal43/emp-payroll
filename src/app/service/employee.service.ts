import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private _http: HttpClient
  ) {}

  getAllEmployee(): Observable<any>{
    return this._http.get('http://localhost:3000/employee');
  }

  addEmployee(data: any):Observable<any>{
    return this._http.post('http://localhost:3000/employee',data);
  }

  getEmployeeById(id: number):Observable<any>{
    return this._http.get(`http://localhost:3000/employee/${id}`);
  }

  updateEmployee(id: number, data: any):Observable<any>{
    return this._http.put(`http://localhost:3000/employee/${id}`,data);
  }

  deleteEmployee(id: number):Observable<any>{
    return this._http.delete(`http://localhost:3000/employee/${id}`);
  }
}
