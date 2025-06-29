import { Injectable } from '@nestjs/common';
import { CreateEventDrawDto } from './dto/create-event-draw.dto';
import { UpdateEventDrawDto } from './dto/update-event-draw.dto';
import { EventDrawRepository } from './event-draw.repository';

@Injectable()
export class EventDrawService {
  constructor(private readonly eventDrawRepository: EventDrawRepository) {}

  create(dto: CreateEventDrawDto) {
    return this.eventDrawRepository.create(dto);
  }

  findAll() {
    return this.eventDrawRepository.findAll();
  }

  findOne(id: number) {
    return this.eventDrawRepository.findOne(id);
  }

  update(id: number, dto: UpdateEventDrawDto) {
    return this.eventDrawRepository.update(id, dto);
  }

  remove(id: number) {
    return this.eventDrawRepository.remove(id);
  }
}
