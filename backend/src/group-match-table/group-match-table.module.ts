import { Module } from '@nestjs/common';
import { GroupMatchTableService } from './group-match-table.service';
import { GroupMatchTableController } from './group-match-table.controller';
import { GroupMatchTableRepository } from './group-match-table.repository';

@Module({
  controllers: [GroupMatchTableController],
  providers: [GroupMatchTableService, GroupMatchTableRepository],
})
export class GroupMatchTableModule {}
