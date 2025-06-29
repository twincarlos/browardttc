import { Module } from '@nestjs/common';
import { TournamentPlayerService } from './tournament-player.service';
import { TournamentPlayerController } from './tournament-player.controller';
import { TournamentPlayerRepository } from './tournament-player.repository';

@Module({
  controllers: [TournamentPlayerController],
  providers: [TournamentPlayerService, TournamentPlayerRepository],
})
export class TournamentPlayerModule {}
