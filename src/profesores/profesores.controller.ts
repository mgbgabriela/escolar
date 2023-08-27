import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { profesoresDto } from './dto/profesores.dto';

@Controller('profesores')
export class ProfesoresController {
  constructor(private readonly profesoresService: ProfesoresService) {}

  @Post()
  create(@Body() profesoresDto: profesoresDto) {
    return this.profesoresService.create(profesoresDto);
  }

  @Get()
  findAll() {
    return this.profesoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() profesoresDto: profesoresDto) {
    return this.profesoresService.update(+id, profesoresDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesoresService.remove(+id);
  }
}


