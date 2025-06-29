import { Module } from '@nestjs/common';
import { TournamentTableService } from './tournament-table.service';
import { TournamentTableController } from './tournament-table.controller';
import { TournamentTableRepository } from './tournament-table.repository';

@Module({
  controllers: [TournamentTableController],
  providers: [TournamentTableService, TournamentTableRepository],
})
export class TournamentTableModule {}
