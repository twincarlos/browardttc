import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DrawMatchTableService } from './draw-match-table.service';
import { CreateDrawMatchTableDto } from './dto/create-draw-match-table.dto';
import { UpdateDrawMatchTableDto } from './dto/update-draw-match-table.dto';

@Controller('draw-match-table')
export class DrawMatchTableController {
  constructor(private readonly drawMatchTableService: DrawMatchTableService) {}

  @Post()
  create(@Body() dto: CreateDrawMatchTableDto) {
    return this.drawMatchTableService.create(dto);
  }

  @Get()
  findAll() {
    return this.drawMatchTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drawMatchTableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDrawMatchTableDto) {
    return this.drawMatchTableService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drawMatchTableService.remove(+id);
  }
}
