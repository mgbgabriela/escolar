import { Module } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { ProfesoresController } from './profesores.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Profesores } from './entities/profesores.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Profesores
    ])
  ],
  controllers: [ProfesoresController],
  providers: [ProfesoresService],
})
export class ProfesoresModule {}


