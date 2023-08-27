import { Entity, PrimaryColumn, Column} from "typeorm";


@Entity('estudiantes')
export class Estudiantes {
    @PrimaryColumn()
    private idEstudiante : number;
    @Column()
    private apellidoNombre : string;
    @Column()
    private fechaNacimiento : string;
   

    constructor (idEstudiante: number, apellidoNombre:string, fechaNacimiento : string){
        this.idEstudiante = idEstudiante;
        this.apellidoNombre = apellidoNombre;
        this.fechaNacimiento = fechaNacimiento;
     
    }
    public getIdEstudiante(): number{return this.idEstudiante};
    public setIdEstudiante(idEstudiante:number): void{this.idEstudiante = idEstudiante};
    public getApellidoNombre(): string{return this.apellidoNombre};
    public setApellidoNombre(idApellidoNombre:string): void{this.apellidoNombre= this.apellidoNombre};
    public getFechaNacimiento(): string{return this.fechaNacimiento};
    public setFechaNacimiento(idFechaNacimiento:string): void{this.fechaNacimiento= this.fechaNacimiento};

   
}

