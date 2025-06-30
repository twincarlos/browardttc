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
import { DrawMatchTableService } from './draw-match-table.service';
import { CreateDrawMatchTableDto } from './dto/create-draw-match-table.dto';
import { UpdateDrawMatchTableDto } from './dto/update-draw-match-table.dto';

@Controller('draw-match-table')
export class DrawMatchTableController {
  constructor(private readonly drawMatchTableService: DrawMatchTableService) {}

  @Post()
  create(@Body() dto: CreateDrawMatchTableDto) {
    return this.drawMatchTableService.create(dto);
  }

  @Get()
  findAllByTournamentId(
    @Query('tournament_id') tournament_id: string,
    @Query('tournament_event_id') tournament_event_id: string,
  ) {
    if (tournament_id) {
      return this.drawMatchTableService.findAllByTournamentId(+tournament_id);
    }
    if (tournament_event_id) {
      return this.drawMatchTableService.findAllByTournamentEventId(
        +tournament_event_id,
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drawMatchTableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDrawMatchTableDto) {
    return this.drawMatchTableService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drawMatchTableService.remove(+id);
  }
}
