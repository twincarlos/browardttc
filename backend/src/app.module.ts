import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentModule } from './tournament/tournament.module';
import { TournamentEventModule } from './tournament-event/tournament-event.module';
import { TournamentTableModule } from './tournament-table/tournament-table.module';
import { TournamentPlayerModule } from './tournament-player/tournament-player.module';
import { EventPlayerModule } from './event-player/event-player.module';
import { EventGroupModule } from './event-group/event-group.module';
import { GroupPlayerModule } from './group-player/group-player.module';
import { GroupMatchModule } from './group-match/group-match.module';
import { GroupMatchTableModule } from './group-match-table/group-match-table.module';
import { EventDrawModule } from './event-draw/event-draw.module';
import { DrawPlayerModule } from './draw-player/draw-player.module';
import { DrawMatchModule } from './draw-match/draw-match.module';
import { DrawMatchTableModule } from './draw-match-table/draw-match-table.module';

@Module({
  imports: [TournamentModule, TournamentEventModule, TournamentTableModule, TournamentPlayerModule, EventPlayerModule, EventGroupModule, GroupPlayerModule, GroupMatchModule, GroupMatchTableModule, EventDrawModule, DrawPlayerModule, DrawMatchModule, DrawMatchTableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
