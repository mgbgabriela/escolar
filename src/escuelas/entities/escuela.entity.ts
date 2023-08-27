import { Entity, PrimaryColumn, Column} from "typeorm";


@Entity('escuelas')
export class Escuela {
    @PrimaryColumn()
    private idEscuela : number;
    @Column()
    private nombreEscuela : string;
    @Column()
    private domicilio : string;
    @Column() idCiudad : number;
    


    constructor (idEscuela: number, nombreEscuela:string, domicilio:string, idCiudad:number){
        this.idEscuela = idEscuela;
        this.nombreEscuela = nombreEscuela;
        this.domicilio = domicilio;
        this.idCiudad = idCiudad;
    }
    public getIdEscuela(): number{return this.idEscuela};
    public setIdEscuela(idEscuela:number): void{this.idEscuela = idEscuela};
    public getNombreEscuela(): string{return this.nombreEscuela};
    public setNombreEscuela(idNombreEscuela:string): void{this.nombreEscuela= this.nombreEscuela};
    public getDomicilio(): string{return this.domicilio};
    public setDomicilio(idDomicilio:string): void{this.domicilio= this.domicilio};
    public getIdCiudad(): number{return this.idCiudad};
    public setIdCiudad(idCiudad:number): void{this.idCiudad = idCiudad};
}
