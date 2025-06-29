import { Module } from '@nestjs/common';
import { EventPlayerService } from './event-player.service';
import { EventPlayerController } from './event-player.controller';
import { EventPlayerRepository } from './event-player.repository';

@Module({
  controllers: [EventPlayerController],
  providers: [EventPlayerService, EventPlayerRepository],
})
export class EventPlayerModule {}
