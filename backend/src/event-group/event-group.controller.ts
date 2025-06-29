import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventGroupService } from './event-group.service';
import { CreateEventGroupDto } from './dto/create-event-group.dto';
import { UpdateEventGroupDto } from './dto/update-event-group.dto';

@Controller('event-group')
export class EventGroupController {
  constructor(private readonly eventGroupService: EventGroupService) {}

  @Post()
  create(@Body() dto: CreateEventGroupDto) {
    return this.eventGroupService.create(dto);
  }

  @Get()
  findAll() {
    return this.eventGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEventGroupDto) {
    return this.eventGroupService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventGroupService.remove(+id);
  }
}
