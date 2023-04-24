import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from '../models/departement';
import { Employee } from '../models/employee';
import { DepartementService } from '../services/departement.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  errormessage!:string;
  employeeFormGroup!:FormGroup;
  departements!:Departement[];
  constructor(private servicedepartement :DepartementService, private serviceemployee:EmployeeService, private router:Router, private route:ActivatedRoute ,private form:FormBuilder) { }

  ngOnInit(): void {
  
    this.employeeFormGroup=this.form.group({
      fullName:['',Validators.required],
    age:['',Validators.required],
     email:['',Validators.required] ,
    
     departementdto:['',Validators.required],
    })
this.servicedepartement.listedepartement().subscribe({
  next:data=>{
    this.departements=data;
  }
})
  }
  onSubmit(){

    let employee : Employee=this.employeeFormGroup.value;
  //let id:number=this.employeeFormGroup.value.departementdto;
  console.log(employee);
  //employee.departementdto.id=id;
    this.serviceemployee.ajouteremployee(employee).subscribe({
      next:data=>{alert("departement saved");
      
    },
      error:err=>{this.errormessage = err.error.message;
      }
      
    })
}
}