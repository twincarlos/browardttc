import { Injectable } from '@nestjs/common';
import { CreateTournamentEventDto } from './dto/create-tournament-event.dto';
import { UpdateTournamentEventDto } from './dto/update-tournament-event.dto';
import { TournamentEventRepository } from './tournament-event.repository';

@Injectable()
export class TournamentEventService {
  constructor(private readonly tournamentEventRepository: TournamentEventRepository) {}

  create(dto: CreateTournamentEventDto) {
    return this.tournamentEventRepository.create(dto);
  }

  findAll() {
    return this.tournamentEventRepository.findAll();
  }

  findOne(id: number) {
    return this.tournamentEventRepository.findOne(id);
  }

  update(id: number, dto: UpdateTournamentEventDto) {
    return this.tournamentEventRepository.update(id, dto);
  }

  remove(id: number) {
    return this.tournamentEventRepository.remove(id);
  }
}
