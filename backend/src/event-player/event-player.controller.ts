import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventPlayerService } from './event-player.service';
import { CreateEventPlayerDto } from './dto/create-event-player.dto';
import { UpdateEventPlayerDto } from './dto/update-event-player.dto';

@Controller('event-player')
export class EventPlayerController {
  constructor(private readonly eventPlayerService: EventPlayerService) {}

  @Post()
  create(@Body() dto: CreateEventPlayerDto) {
    return this.eventPlayerService.create(dto);
  }

  @Get()
  findAll() {
    return this.eventPlayerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventPlayerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEventPlayerDto) {
    return this.eventPlayerService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventPlayerService.remove(+id);
  }
}
