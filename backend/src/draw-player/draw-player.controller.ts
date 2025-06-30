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
  findAllByTournamentId(
    @Query('tournament_id') tournament_id: string,
    @Query('tournament_event_id') tournament_event_id: string,
  ) {
    if (tournament_id) {
      return this.drawPlayerService.findAllByTournamentId(+tournament_id);
    }
    if (tournament_event_id) {
      return this.drawPlayerService.findAllByTournamentEventId(
        +tournament_event_id,
      );
    }
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
