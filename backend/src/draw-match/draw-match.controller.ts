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
import { DrawMatchService } from './draw-match.service';
import { CreateDrawMatchDto } from './dto/create-draw-match.dto';
import { UpdateDrawMatchDto } from './dto/update-draw-match.dto';

@Controller('draw-match')
export class DrawMatchController {
  constructor(private readonly drawMatchService: DrawMatchService) {}

  @Post()
  create(@Body() dto: CreateDrawMatchDto) {
    return this.drawMatchService.create(dto);
  }

  @Get()
  findAllByTournamentId(
    @Query('tournament_id') tournament_id: string,
    @Query('tournament_event_id') tournament_event_id: string,
  ) {
    if (tournament_id) {
      return this.drawMatchService.findAllByTournamentId(+tournament_id);
    }
    if (tournament_event_id) {
      return this.drawMatchService.findAllByTournamentEventId(
        +tournament_event_id,
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drawMatchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDrawMatchDto) {
    return this.drawMatchService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drawMatchService.remove(+id);
  }
}
