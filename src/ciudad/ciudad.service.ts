import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ciudadDTO } from './dto/ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';

@Injectable()
//permite inyectaren mi constructor y permite en otras clases inyectarme
export class CiudadService{
  addCiudad(ciudad: any): string {
    throw new Error('Method not implemented.');
  }
  private ciudades : Ciudad[] = [];

  constructor(@InjectRepository(Ciudad) private readonly ciudadRepository: Repository<Ciudad>){}

  //Repository<Ciudad> esto define un repositorio con la entidad ciudad, es decir, va a hacer referencia sus metodos a todo lo relacionado con ciudad
//Hay uno por cada entidad que quiero usar(relacion a 1 entidad ciudad y a 1 tabla)

public async getAllRaw(): Promise<Ciudad[]> {

  //crietrio seria el where de nuestra consulta de base de datos, lo que nos provee es armar la condicione de busqueda

  let datos = await this.ciudadRepository.query("SELECT *FROM ciudades");

  //repository nos provee los metodos para hacer las solicitudes a la base de datos
if (datos){ 
  datos.forEach(element =>{
      let ciudad: Ciudad = new Ciudad(element['idCiudad'], element['nombre']);
      this.ciudades.push(ciudad);

      //por cada elemento esta creando una nueva instancia yse la agrega a ciudad

    });
  }else{
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

    //
    let ciudades : Ciudad[]= await this.ciudadRepository.find();

    //esto nos ahorra el codigo de arriba "datos.forEach..", ya que mapea objeto - relacional, y crea el arreglo ciudades
    //crea un arreglo de objetos de la clase Ciudad con la respesta de la BD

    return this.ciudades;
  
}


  create(ciudadDTO: ciudadDTO): string {
    return 'This action adds a new ciudad';
  }

  findAll() {
    return `This action returns all ciudad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudad`;
  }

  update(id: number, ciudadDTO: ciudadDTO) {
    return `This action updates a #${id} ciudad`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudad`;
  }
}
