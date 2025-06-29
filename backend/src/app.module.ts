import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentModule } from './tournament/tournament.module';
import { TournamentEventModule } from './tournament-event/tournament-event.module';
import { TournamentTableModule } from './tournament-table/tournament-table.module';
import { TournamentPlayerModule } from './tournament-player/tournament-player.module';
import { EventPlayerModule } from './event-player/event-player.module';

@Module({
  imports: [TournamentModule, TournamentEventModule, TournamentTableModule, TournamentPlayerModule, EventPlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
