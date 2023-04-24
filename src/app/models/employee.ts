import { Adress } from "./adress";
import { Departement } from "./departement";

export class Employee {
    id!: number;
    fullName!:string ;
    age!:number ;
     email!:string ;
    
     departementdto!:Departement;
     //iddepartement!:number;
}
