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
  findAllByTournamentId(
    @Query('tournament_id') tournament_id: string,
    @Query('tournament_event_id') tournament_event_id: string,
  ) {
    if (tournament_id) {
      return this.eventGroupService.findAllByTournamentId(+tournament_id);
    }
    if (tournament_event_id) {
      return this.eventGroupService.findAllByTournamentEventId(
        +tournament_event_id,
      );
    }
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
