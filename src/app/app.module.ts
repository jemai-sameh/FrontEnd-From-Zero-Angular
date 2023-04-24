import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DepartementComponent } from './departement/departement.component';
import { NewdepartementComponent } from './newdepartement/newdepartement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetalisEmployeeComponent } from './detalis-employee/detalis-employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { MissionComponent } from './mission/mission.component';
import { AjouteMisisonComponent } from './ajoute-misison/ajoute-misison.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    NewdepartementComponent,
    DetailsComponent,
    EmployeeComponent,
    DetalisEmployeeComponent,
    NewEmployeeComponent,
    MissionComponent,
    AjouteMisisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
