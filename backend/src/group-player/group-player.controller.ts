import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupPlayerService } from './group-player.service';
import { CreateGroupPlayerDto } from './dto/create-group-player.dto';
import { UpdateGroupPlayerDto } from './dto/update-group-player.dto';

@Controller('group-player')
export class GroupPlayerController {
  constructor(private readonly groupPlayerService: GroupPlayerService) {}

  @Post()
  create(@Body() dto: CreateGroupPlayerDto) {
    return this.groupPlayerService.create(dto);
  }

  @Get()
  findAll() {
    return this.groupPlayerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupPlayerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGroupPlayerDto) {
    return this.groupPlayerService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupPlayerService.remove(+id);
  }
}
