import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DrawMatchService } from './draw-match.service';
import { CreateDrawMatchDto } from './dto/create-draw-match.dto';
import { UpdateDrawMatchDto } from './dto/update-draw-match.dto';

@Controller('draw-match')
export class DrawMatchController {
  constructor(private readonly drawMatchService: DrawMatchService) {}

  @Post()
  create(@Body() dto: CreateDrawMatchDto) {
    return this.drawMatchService.create(dto);
  }

  @Get()
  findAll() {
    return this.drawMatchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drawMatchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDrawMatchDto) {
    return this.drawMatchService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drawMatchService.remove(+id);
  }
}
