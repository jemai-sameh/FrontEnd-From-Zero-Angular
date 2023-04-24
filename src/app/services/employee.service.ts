import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  localUrl:string = environment.basurl + "/employee"

  constructor(private http:HttpClient) {}

  ajouteremployee(emp:Employee ):Observable<Employee> {
return this.http.post<Employee>(`${this.localUrl}/save`, emp)
//.pipe(map((response:any)=> response as Employee))
  } 

  ajouterEmployeebis(emp:Employee) {
  return this.http.post(`${this.localUrl}/save`, emp)
  }

  listeEmployee():Observable<Employee[]> {
    return this.http.get<Employee[]> (`${this.localUrl}/lister`)
    //.pipe(map((response:any)=> response as Employee))
  }

    listeEmployees():Observable<Array <Employee>> {
      return this.http.get<Array <Employee>> (`${this.localUrl}/getall`)
  }

 // findEmployee(id:number):Observable<Employee>{
    //return this.http.get<Employee>(`${this.localUrl}/getbyid/${id}`)
 // }
  findEmployee(id: number): Observable<Employee> {
    return this.http.get(`${this.localUrl}/getbyid/${id}`).pipe(
      map((response:any) => response as Employee)
    );
  }
  deleteEmployee(id:number):Observable<Employee> {
    return this.http.delete<Employee>(`${this.localUrl}/delet/${id}`)
}
}
