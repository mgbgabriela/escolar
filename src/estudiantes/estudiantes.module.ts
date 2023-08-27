import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Estudiantes } from './entities/estudiante.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Estudiantes
    ])
  ],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
})
export class EstudiantesModule {}


