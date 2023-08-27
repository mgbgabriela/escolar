
import { profesoresDto } from './dto/profesores.dto';
import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Profesores}  from './entities/profesores.entity';


@Injectable()
export class ProfesoresService {

  private profesores : Profesores[] = [];

  constructor(@InjectRepository(Profesores) private readonly profesoresRepositoy: Repository<Profesores>){}

  public async getAllRaw(): Promise<Profesores[]> {

    let datos = await this.profesoresRepositoy.query("SELECT *FROM profesores");

    if (datos){
      datos.forEach(element =>{
        let profesor : Profesores= new Profesores(element['idProfesor'], element['nombreApellido']);
        this.profesores.push(profesor);
    });
       
      }else{
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      } 
    return this.profesores;
  
  }
 


  create(profesoresDto: profesoresDto) {
    return 'This action adds a new profesores';
  }

  findAll() {
    return `This action returns all profesores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profesores`;
  }

  update(id: number, profesoresDto: profesoresDto) {
    return `This action updates a #${id} profesores`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesores`;
  }
}


