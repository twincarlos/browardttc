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
import { GroupPlayerService } from './group-player.service';
import { CreateGroupPlayerDto } from './dto/create-group-player.dto';
import { UpdateGroupPlayerDto } from './dto/update-group-player.dto';

@Controller('group-player')
export class GroupPlayerController {
  constructor(private readonly groupPlayerService: GroupPlayerService) {}

  @Post()
  create(@Body() dto: CreateGroupPlayerDto) {
    return this.groupPlayerService.create(dto);
  }

  @Get()
  findAllByTournamentId(
    @Query('tournament_id') tournament_id: string,
    @Query('tournament_event_id') tournament_event_id: string,
  ) {
    if (tournament_id) {
      return this.groupPlayerService.findAllByTournamentId(+tournament_id);
    }
    if (tournament_event_id) {
      return this.groupPlayerService.findAllByTournamentEventId(
        +tournament_event_id,
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupPlayerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGroupPlayerDto) {
    return this.groupPlayerService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupPlayerService.remove(+id);
  }
}
