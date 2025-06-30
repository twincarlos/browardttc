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
import { GroupMatchService } from './group-match.service';
import { CreateGroupMatchDto } from './dto/create-group-match.dto';
import { UpdateGroupMatchDto } from './dto/update-group-match.dto';

@Controller('group-match')
export class GroupMatchController {
  constructor(private readonly groupMatchService: GroupMatchService) {}

  @Post()
  create(@Body() dto: CreateGroupMatchDto) {
    return this.groupMatchService.create(dto);
  }

  @Get()
  findAllByTournamentId(
    @Query('tournament_id') tournament_id: string,
    @Query('tournament_event_id') tournament_event_id: string,
  ) {
    if (tournament_id) {
      return this.groupMatchService.findAllByTournamentId(+tournament_id);
    }
    if (tournament_event_id) {
      return this.groupMatchService.findAllByTournamentEventId(
        +tournament_event_id,
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupMatchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGroupMatchDto) {
    return this.groupMatchService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupMatchService.remove(+id);
  }
}
