import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Departement } from '../models/departement';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

 // departements! : Departement[]; // with table
  departements! :Array <Departement>; //with list
  //dept : Departement=new Departement();

  constructor(private servicedepartement:DepartementService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData()
  }
reloadData(){
  this.servicedepartement.listedepartement().subscribe({
    next:(data)=> {
      this.departements=data
      console.log(this.departements)
    },
    error : (err)=>{
       console.log(err)
    }
  })
}
Modiferdepartement(id: number){
  this.router.navigate(['/details', id]);
}
deleteData(id :number){
  if(id!=undefined && id !=null)
    {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Vous ne pourrez pas récupérer ce emp!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimez-le!',
        cancelButtonText: 'Non, gardez-le'
      }).then((result : any) => {
        if (result.value) {
         // alert(id);
         this.servicedepartement.deletedepartement(id).subscribe(res=>{
          this.reloadData()
          })
        Swal.fire(
          'Supprimé!',
          'Votre emp a été supprimé.',
          'success'
        )}

  })
}
}
}
