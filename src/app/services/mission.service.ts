import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Mission} from "../models/mission";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  localUrl:string = environment.basurl + "/mission"

  constructor(private http:HttpClient) {}

  ajouterMission(miss:Mission ):Observable<Mission> {
    return this.http.post<Mission>(`${this.localUrl}/missiontoemployee`, miss)
//.pipe(map((response:any)=> response as Mission))
  }

  ajouterMissionbis(miss:Mission) {
    return this.http.post(`${this.localUrl}/savemiss`, miss)
  }

  listeMission():Observable<Mission[]> {
    return this.http.get<Mission[]> (`${this.localUrl}/lister`)
    //.pipe(map((response:any)=> response as Mission))
  }

  listeMissions():Observable<Array <Mission>> {
    return this.http.get<Array <Mission>> (`${this.localUrl}/findLIst`)
  }

  // findMission(id:number):Observable<Mission>{
  //return this.http.get<Mission>(`${this.localUrl}/getbyid/${id}`)
  // }
  findMission(id: number): Observable<Mission> {
    return this.http.get(`${this.localUrl}/findBuID/{id}`).pipe(
        map((response:any) => response as Mission)
    );
  }
  deleteMission(id:number):Observable<Mission> {
    return this.http.delete<Mission>(`${this.localUrl}/delete/{id}`)
  }
}
