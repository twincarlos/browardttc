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

  findAllByTournamentId(tournament_id: number) {
    return this.eventDrawRepository.findAllByTournamentId(tournament_id);
  }

  findAllByTournamentEventId(tournament_event_id: number) {
    return this.eventDrawRepository.findAllByTournamentEventId(
      tournament_event_id,
    );
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
