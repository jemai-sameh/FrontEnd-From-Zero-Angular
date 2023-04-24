import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement/departement.component';
import { DetailsComponent } from './details/details.component';
import { DetalisEmployeeComponent } from './detalis-employee/detalis-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { NewdepartementComponent } from './newdepartement/newdepartement.component';
import { MissionComponent } from './mission/mission.component';
import { AjouteMisisonComponent } from './ajoute-misison/ajoute-misison.component';

const routes: Routes = [
  {path : "nn" ,component : DepartementComponent},
  {path : "ajouterDepartement" ,component : NewdepartementComponent},
  {path : "details/:id" ,component : DetailsComponent},
  {path : "detailsemp/:id" ,component : DetalisEmployeeComponent},
  {path : "ajouteremployee" ,component : NewEmployeeComponent},
  {path : "listeEmployee" ,component : EmployeeComponent},
  {path : "ListMission" ,component : MissionComponent},
  //AjoutMission
  {path : "" ,component : AjouteMisisonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
