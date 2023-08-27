
import { Entity, PrimaryColumn, Column} from "typeorm";


@Entity('profesores')
export class Profesores {
    @PrimaryColumn()
    private idProfesor : number;
    @Column()
    private nombreApellido : string;
   

    constructor (idProfesor: number, nombreApellido:string){
        this.idProfesor = idProfesor;
        this.nombreApellido = nombreApellido;
     
    }
    public getIdProfesor(): number{return this.idProfesor};
    public setIdProfesor(idProfesor:number): void{this.idProfesor = idProfesor};
    public getNombreApellido(): string{return this.nombreApellido};
    public setNombreApellido(idNombreApellido:string): void{this.nombreApellido= this.nombreApellido};
   
}
