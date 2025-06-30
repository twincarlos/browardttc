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
import { TournamentEventService } from './tournament-event.service';
import { CreateTournamentEventDto } from './dto/create-tournament-event.dto';
import { UpdateTournamentEventDto } from './dto/update-tournament-event.dto';

@Controller('tournament-event')
export class TournamentEventController {
  constructor(
    private readonly tournamentEventService: TournamentEventService,
  ) {}

  @Post()
  create(@Body() dto: CreateTournamentEventDto) {
    return this.tournamentEventService.create(dto);
  }

  @Get()
  findAllByTournamentId(@Query('tournament_id') tournament_id: string) {
    return this.tournamentEventService.findAllByTournamentId(+tournament_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentEventService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTournamentEventDto) {
    return this.tournamentEventService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentEventService.remove(+id);
  }
}
