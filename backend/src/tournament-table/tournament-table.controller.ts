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
import { TournamentTableService } from './tournament-table.service';
import { CreateTournamentTableDto } from './dto/create-tournament-table.dto';
import { UpdateTournamentTableDto } from './dto/update-tournament-table.dto';

@Controller('tournament-table')
export class TournamentTableController {
  constructor(
    private readonly tournamentTableService: TournamentTableService,
  ) {}

  @Post()
  create(@Body() dto: CreateTournamentTableDto) {
    return this.tournamentTableService.create(dto);
  }

  @Get()
  findAllByTournamentId(@Query('tournament_id') tournament_id: string) {
    return this.tournamentTableService.findAllByTournamentId(+tournament_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentTableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTournamentTableDto) {
    return this.tournamentTableService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentTableService.remove(+id);
  }
}
