import { Module } from '@nestjs/common';
import { EventGroupService } from './event-group.service';
import { EventGroupController } from './event-group.controller';
import { EventGroupRepository } from './event-group.repository';

@Module({
  controllers: [EventGroupController],
  providers: [EventGroupService, EventGroupRepository],
})
export class EventGroupModule {}
