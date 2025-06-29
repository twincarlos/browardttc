import { Module } from '@nestjs/common';
import { DrawMatchTableService } from './draw-match-table.service';
import { DrawMatchTableController } from './draw-match-table.controller';
import { DrawMatchTableRepository } from './draw-match-table.repository';

@Module({
  controllers: [DrawMatchTableController],
  providers: [DrawMatchTableService, DrawMatchTableRepository],
})
export class DrawMatchTableModule {}
