import { Injectable } from '@nestjs/common';
import { CreateTournamentPlayerDto } from './dto/create-tournament-player.dto';
import { UpdateTournamentPlayerDto } from './dto/update-tournament-player.dto';
import { TournamentPlayerRepository } from './tournament-player.repository';

@Injectable()
export class TournamentPlayerService {
  constructor(private readonly tournamentPlayerRepository: TournamentPlayerRepository) {}

  create(dto: CreateTournamentPlayerDto) {
    return this.tournamentPlayerRepository.create(dto);
  }

  findAllByTournamentId(tournament_id: number) {
    return this.tournamentPlayerRepository.findAllByTournamentId(tournament_id);
  }

  findOne(id: number) {
    return this.tournamentPlayerRepository.findOne(id);
  }

  update(id: number, dto: UpdateTournamentPlayerDto) {
    return this.tournamentPlayerRepository.update(id, dto);
  }

  remove(id: number) {
    return this.tournamentPlayerRepository.remove(id);
  }
}
