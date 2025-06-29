import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TournamentPlayerService } from './tournament-player.service';
import { CreateTournamentPlayerDto } from './dto/create-tournament-player.dto';
import { UpdateTournamentPlayerDto } from './dto/update-tournament-player.dto';

@Controller('tournament-player')
export class TournamentPlayerController {
  constructor(
    private readonly tournamentPlayerService: TournamentPlayerService,
  ) {}

  @Post()
  create(@Body() dto: CreateTournamentPlayerDto) {
    return this.tournamentPlayerService.create(dto);
  }

  @Get()
  findAll() {
    return this.tournamentPlayerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentPlayerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTournamentPlayerDto) {
    return this.tournamentPlayerService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentPlayerService.remove(+id);
  }
}
