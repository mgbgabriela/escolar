import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { EscuelasModule } from './escuelas/escuelas.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ProfesoresModule } from './profesores/profesores.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "MGB1980mgb",
        database: "escolar",
        entities: [
         "dist/**/**.entity{.ts,.js}"
         ],
        synchronize: true
        }
        
    ),
    CiudadModule,
    EscuelasModule,
    EstudiantesModule,
    ProfesoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
