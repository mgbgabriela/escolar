import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { ciudadDTO } from './dto/ciudad.dto';


@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Post()
  create(@Body() ciudadDTO: ciudadDTO): string {
    return this.ciudadService.create(ciudadDTO);
  }

  @Get()
  findAll() {
    return this.ciudadService.getAllRaw();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ciudadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() CiudadDTO: ciudadDTO) {
    return this.ciudadService.update(+id, CiudadDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ciudadService.remove(+id);
  }
}
