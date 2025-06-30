import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EventDrawService } from './event-draw.service';
import { CreateEventDrawDto } from './dto/create-event-draw.dto';
import { UpdateEventDrawDto } from './dto/update-event-draw.dto';

@Controller('event-draw')
export class EventDrawController {
  constructor(private readonly eventDrawService: EventDrawService) {}

  @Post()
  create(@Body() dto: CreateEventDrawDto) {
    return this.eventDrawService.create(dto);
  }

  @Get()
  findAllByTournamentId(
    @Query('tournament_id') tournament_id: string,
    @Query('tournament_event_id') tournament_event_id: string,
  ) {
    if (tournament_id) {
      return this.eventDrawService.findAllByTournamentId(+tournament_id);
    }
    if (tournament_event_id) {
      return this.eventDrawService.findAllByTournamentEventId(
        +tournament_event_id,
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventDrawService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEventDrawDto) {
    return this.eventDrawService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventDrawService.remove(+id);
  }
}
