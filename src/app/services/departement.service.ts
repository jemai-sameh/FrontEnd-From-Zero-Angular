import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departement } from '../models/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

localUrl:string = environment.basurl + "/departements"

  constructor(private http:HttpClient) {}

  ajouterdepartement(dep:Departement):Observable<Departement> {
return this.http.post<Departement>(`${this.localUrl}/save`, dep)
//.pipe(map((response:any)=> response as Departement))
  } 

  ajouterdepartementbis(dep:Departement) {
  return this.http.post(`${this.localUrl}/save`, dep)
  }

  listedepartement():Observable<Departement[]> {
    return this.http.get<Departement[]> (`${this.localUrl}/getall`)
    //.pipe(map((response:any)=> response as Departement))
  }

    listedepartements():Observable<Array <Departement>> {
      return this.http.get<Array <Departement>> (`${this.localUrl}/getall`)
  }

 // finddepartement(id:number):Observable<Departement>{
    //return this.http.get<Departement>(`${this.localUrl}/getbyid/${id}`)
 // }
  finddepartement(id: number): Observable<Departement> {
    return this.http.get(`${this.localUrl}/getbyid/${id}`).pipe(
      map((response:any) => response as Departement)
    );
  }
  deletedepartement(id:number):Observable<Departement> {
    return this.http.delete<Departement>(`${this.localUrl}/delet/${id}`)
}
}