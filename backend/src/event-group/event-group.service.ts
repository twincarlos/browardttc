import { Injectable } from '@nestjs/common';
import { CreateEventGroupDto } from './dto/create-event-group.dto';
import { UpdateEventGroupDto } from './dto/update-event-group.dto';
import { EventGroupRepository } from './event-group.repository';

@Injectable()
export class EventGroupService {
  constructor(private readonly eventGroupRepository: EventGroupRepository) {}

  create(dto: CreateEventGroupDto) {
    return this.eventGroupRepository.create(dto);
  }

  findAll() {
    return this.eventGroupRepository.findAll();
  }

  findOne(id: number) {
    return this.eventGroupRepository.findOne(id);
  }

  update(id: number, dto: UpdateEventGroupDto) {
    return this.eventGroupRepository.update(id, dto);
  }

  remove(id: number) {
    return this.eventGroupRepository.remove(id);
  }
}
