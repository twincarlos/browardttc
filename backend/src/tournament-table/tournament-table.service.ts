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

  findAll() {
    return this.tournamentTableRepository.findAll();
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
