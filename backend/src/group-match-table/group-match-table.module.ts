import { Module } from '@nestjs/common';
import { GroupMatchTableService } from './group-match-table.service';
import { GroupMatchTableController } from './group-match-table.controller';

@Module({
  controllers: [GroupMatchTableController],
  providers: [GroupMatchTableService],
})
export class GroupMatchTableModule {}
