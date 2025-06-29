import { Injectable } from '@nestjs/common';
import { CreateEventPlayerDto } from './dto/create-event-player.dto';
import { UpdateEventPlayerDto } from './dto/update-event-player.dto';
import { EventPlayerRepository } from './event-player.repository';

@Injectable()
export class EventPlayerService {
  constructor(private readonly eventPlayerRepository: EventPlayerRepository) {}

  create(dto: CreateEventPlayerDto) {
    return this.eventPlayerRepository.create(dto);
  }

  findAll() {
    return this.eventPlayerRepository.findAll();
  }

  findOne(id: number) {
    return this.eventPlayerRepository.findOne(id);
  }

  update(id: number, dto: UpdateEventPlayerDto) {
    return this.eventPlayerRepository.update(id, dto);
  }

  remove(id: number) {
    return this.eventPlayerRepository.remove(id);
  }
}
