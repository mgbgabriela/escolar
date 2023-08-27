import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { escuelaDto } from './dto/escuela.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Escuela } from './entities/escuela.entity';

@Injectable()
export class EscuelasService {

  private escuelas : Escuela[]=[];

  constructor(@InjectRepository(Escuela) private readonly escuelaRepositoy: Repository<Escuela>){}

  public async getAllRaw(): Promise<Escuela[]> {

    let datos = await this.escuelaRepositoy.query("SELECT *FROM escuelas");

    if (datos){
      datos.forEach(element =>{
        let escuela : Escuela= new Escuela(element['idEscuela'], element['nombre'], element['domicilio'], element['idCiudad']);
      this.escuelas.push(escuela);
    });

    
    }else{
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }  return this.escuelas;
  }




  create(escuelaDto: escuelaDto): string {
    return 'This action adds a new escuela';
  }

  findAll() {
    return `This action returns all escuelas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} escuela`;
  }

  update(id: number, escuelaDto: escuelaDto) {
    return `This action updates a #${id} escuela`;
  }

  remove(id: number) {
    return `This action removes a #${id} escuela`;
  }
}
