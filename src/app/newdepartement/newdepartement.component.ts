import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from '../models/departement';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-newdepartement',
  templateUrl: './newdepartement.component.html',
  styleUrls: ['./newdepartement.component.css']
})
export class NewdepartementComponent implements OnInit {

  errormessage=''

  
departementFormGroup! : FormGroup
  constructor(private departementservice:DepartementService , private router:Router , private fb:FormBuilder) {}

  ngOnInit(): void {  
    this.departementFormGroup=this.fb.group({
      name:this.fb.control("",[Validators.required,Validators.maxLength(10),Validators.minLength(2)])
    })
  }
onSubmit(){

  let departement : Departement=this.departementFormGroup.value;

  this.departementservice.ajouterdepartement(departement).subscribe({
    next:data=>{alert("departement saved");
    
  },
    error:err=>{this.errormessage = err.error.message;
    }
    
  })
}



}
