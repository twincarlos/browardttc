import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DrawPlayerService } from './draw-player.service';
import { CreateDrawPlayerDto } from './dto/create-draw-player.dto';
import { UpdateDrawPlayerDto } from './dto/update-draw-player.dto';

@Controller('draw-player')
export class DrawPlayerController {
  constructor(private readonly drawPlayerService: DrawPlayerService) {}

  @Post()
  create(@Body() dto: CreateDrawPlayerDto) {
    return this.drawPlayerService.create(dto);
  }

  @Get()
  findAll() {
    return this.drawPlayerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drawPlayerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDrawPlayerDto) {
    return this.drawPlayerService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drawPlayerService.remove(+id);
  }
}
