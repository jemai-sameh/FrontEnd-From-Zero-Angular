import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from '../models/departement';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
submitted=false;
  id!:number;
  iddep:any;
  //departement!:Departement;
  departement:Departement= new Departement();
  constructor(private departemetservice: DepartementService , private route:ActivatedRoute , private router:Router ) { }

  ngOnInit(): void {
  
    this.id= Number(this.route.snapshot.paramMap.get('id'));
  console.log(this.id); // affiche l'ID dans la console
  this.finddepartement(this.id)
}

  
finddepartement(id:any){
  console.log(this.id)
  this.departemetservice.finddepartement(id).subscribe({

    next:data=>{this.departement=data
      console.log(this.departement)
      console.log("test")
    }
    
  })
}
Modiferdepartement(): void {
  if (!this.submitted)
    {
      
      this.departemetservice.ajouterdepartement(this.departement)
        .subscribe({
          next: (res) => {
          // console.log(res);
            this.submitted = true;
            this.router.navigateByUrl("")
          },
        // error: (e) => console.error(e)
        });
    } 
}
navigate(): void {
  this.router.navigate([""])
}
}
