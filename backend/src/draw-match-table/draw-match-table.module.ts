import { Module } from '@nestjs/common';
import { DrawMatchTableService } from './draw-match-table.service';
import { DrawMatchTableController } from './draw-match-table.controller';

@Module({
  controllers: [DrawMatchTableController],
  providers: [DrawMatchTableService],
})
export class DrawMatchTableModule {}
