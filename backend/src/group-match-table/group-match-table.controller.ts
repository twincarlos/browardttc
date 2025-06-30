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
import { GroupMatchTableService } from './group-match-table.service';
import { CreateGroupMatchTableDto } from './dto/create-group-match-table.dto';
import { UpdateGroupMatchTableDto } from './dto/update-group-match-table.dto';

@Controller('group-match-table')
export class GroupMatchTableController {
  constructor(
    private readonly groupMatchTableService: GroupMatchTableService,
  ) {}

  @Post()
  create(@Body() dto: CreateGroupMatchTableDto) {
    return this.groupMatchTableService.create(dto);
  }

  @Get()
  findAllByTournamentId(
    @Query('tournament_id') tournament_id: string,
    @Query('tournament_event_id') tournament_event_id: string,
  ) {
    if (tournament_id) {
      return this.groupMatchTableService.findAllByTournamentId(+tournament_id);
    }
    if (tournament_event_id) {
      return this.groupMatchTableService.findAllByTournamentEventId(
        +tournament_event_id,
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupMatchTableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGroupMatchTableDto) {
    return this.groupMatchTableService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupMatchTableService.remove(+id);
  }
}
