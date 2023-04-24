import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Departement } from '../models/departement';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // departements! : Departement[]; // with table
  departements!: Array<Departement>; //with list
  departement!: Departement;
  employees!: Employee[];
  employeeFormGroup!: FormGroup;
  //dept : Departement=new Departement();

  constructor(private serviceemployee: EmployeeService, private router: Router, private route: ActivatedRoute, private form: FormBuilder) { }

  ngOnInit(): void {
    this.reloadData();
    console.log(this.employees)
  }
  reloadData() {
    this.serviceemployee.listeEmployee().subscribe({
      next: (data) => {
        this.employees = data
        console.log(this.employees)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  Modiferemployee(id: number) {
    this.router.navigate(['/details', id]);
  }
  deleteData(id: number) {
    if (id != undefined && id != null) {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Vous ne pourrez pas récupérer ce emp!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimez-le!',
        cancelButtonText: 'Non, gardez-le'
      }).then((result: any) => {
        if (result.value) {
          // alert(id);
          this.serviceemployee.deleteEmployee(id).subscribe(res => {
            this.reloadData()
          })
          Swal.fire(
            'Supprimé!',
            'Votre emp a été supprimé.',
            'success'
          )
        }

      })
    }
  }
}
