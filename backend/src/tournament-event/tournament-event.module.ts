import { Module } from '@nestjs/common';
import { TournamentEventService } from './tournament-event.service';
import { TournamentEventController } from './tournament-event.controller';
import { TournamentEventRepository } from './tournament-event.repository';

@Module({
  controllers: [TournamentEventController],
  providers: [TournamentEventService, TournamentEventRepository],
})
export class TournamentEventModule {}
