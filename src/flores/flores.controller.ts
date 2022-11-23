import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FloresService } from './flores.service';
import { CreateFloreDto } from './dto/create-flore.dto';
import { UpdateFloreDto } from './dto/update-flore.dto';

@Controller('flores')
export class FloresController {
  constructor(private floresService: FloresService) {}

  @Post()
  create(@Body() createFloreDto: CreateFloreDto) {
    return this.floresService.create(createFloreDto);
  }

  @Get()
  findAll() {
    return this.floresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.floresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFloreDto: UpdateFloreDto) {
    return this.floresService.update(+id, updateFloreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.floresService.remove(+id);
  }
}
