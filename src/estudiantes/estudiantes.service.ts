
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Estudiantes}  from './entities/estudiante.entity';

@Injectable()
export class EstudiantesService {

  private estudiantes : Estudiantes[]=[];

  constructor(@InjectRepository(Estudiantes) private readonly estudiantesRepository : Repository<Estudiantes>){}



  public async getAllRaw(): Promise<Estudiantes[]> {

    let datos = await this.estudiantesRepository.query("SELECT *FROM estudiantes");

    if (datos){
      datos.forEach(element =>{
        let profesor : Estudiantes= new Estudiantes(element['idEstudiante'], element['apellidoNombre'], element['fechaNacimiento']);
        this.estudiantes.push(profesor);
    });
       
      }else{
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      } 
    return this.estudiantes;
  
  }
 
 
 
  create(createEstudianteDto: CreateEstudianteDto) {
    return 'This action adds a new estudiante';
  }
 
 
  findAll() {
    return `This action returns all estudiantes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
