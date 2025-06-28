import { Injectable } from '@nestjs/common';
import { TournamentRepository } from './tournament.repository';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';

@Injectable()
export class TournamentService {
  constructor(private readonly tournamentRepository: TournamentRepository) {}

  async create(dto: CreateTournamentDto) {
    return this.tournamentRepository.create(dto);
  }

  findAll() {
    return this.tournamentRepository.findAll();
  }

  async findOne(id: number) {
    return this.tournamentRepository.findOne(id);
  }

  async findOneFull(id: number) {
    return this.tournamentRepository.findOneFull(id);
  }

  async update(id: number, dto: UpdateTournamentDto) {
    return this.tournamentRepository.update(id, dto);
  }

  async remove(id: number) {
    return this.tournamentRepository.remove(id);
  }
}
