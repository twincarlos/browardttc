import { Injectable } from '@nestjs/common';
import { CreateTournamentTableDto } from './dto/create-tournament-table.dto';
import { UpdateTournamentTableDto } from './dto/update-tournament-table.dto';
import { TournamentTableRepository } from './tournament-table.repository';

@Injectable()
export class TournamentTableService {
  constructor(private readonly tournamentTableRepository: TournamentTableRepository) {}

  create(dto: CreateTournamentTableDto) {
    return this.tournamentTableRepository.create(dto);
  }

  findAllByTournamentId(tournament_id: number) {
    return this.tournamentTableRepository.findAllByTournamentId(tournament_id);
  }

  findOne(id: number) {
    return this.tournamentTableRepository.findOne(id);
  }

  update(id: number, dto: UpdateTournamentTableDto) {
    return this.tournamentTableRepository.update(id, dto);
  }

  remove(id: number) {
    return this.tournamentTableRepository.remove(id);
  }
}
