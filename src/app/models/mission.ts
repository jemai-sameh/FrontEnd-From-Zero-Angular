import {Employee} from "./employee";

export class Mission {
    id!:number;
    name!:string;
    period!:string;
    datedebut!:Date;
    datefin!:Date;
    employeesdto!:Array<number>
}
