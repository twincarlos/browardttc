import { Module } from '@nestjs/common';
import { EventDrawService } from './event-draw.service';
import { EventDrawController } from './event-draw.controller';
import { EventDrawRepository } from './event-draw.repository';

@Module({
  controllers: [EventDrawController],
  providers: [EventDrawService, EventDrawRepository],
})
export class EventDrawModule {}
