import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupMatchTableService } from './group-match-table.service';
import { CreateGroupMatchTableDto } from './dto/create-group-match-table.dto';
import { UpdateGroupMatchTableDto } from './dto/update-group-match-table.dto';

@Controller('group-match-table')
export class GroupMatchTableController {
  constructor(private readonly groupMatchTableService: GroupMatchTableService) {}

  @Post()
  create(@Body() dto: CreateGroupMatchTableDto) {
    return this.groupMatchTableService.create(dto);
  }

  @Get()
  findAll() {
    return this.groupMatchTableService.findAll();
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
