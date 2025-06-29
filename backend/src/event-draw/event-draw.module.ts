import { Module } from '@nestjs/common';
import { EventDrawService } from './event-draw.service';
import { EventDrawController } from './event-draw.controller';

@Module({
  controllers: [EventDrawController],
  providers: [EventDrawService],
})
export class EventDrawModule {}
