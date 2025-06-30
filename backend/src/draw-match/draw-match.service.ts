import { Injectable } from '@nestjs/common';
import { CreateDrawMatchDto } from './dto/create-draw-match.dto';
import { UpdateDrawMatchDto } from './dto/update-draw-match.dto';
import { DrawMatchRepository } from './draw-match.repository';

@Injectable()
export class DrawMatchService {
  constructor(private readonly drawMatchRepository: DrawMatchRepository) {}

  create(dto: CreateDrawMatchDto) {
    return this.drawMatchRepository.create(dto);
  }

  findAllByTournamentId(tournament_id: number) {
    return this.drawMatchRepository.findAllByTournamentId(tournament_id);
  }

  findAllByTournamentEventId(tournament_event_id: number) {
    return this.drawMatchRepository.findAllByTournamentEventId(
      tournament_event_id,
    );
  }

  findOne(id: number) {
    return this.drawMatchRepository.findOne(id);
  }

  update(id: number, dto: UpdateDrawMatchDto) {
    return this.drawMatchRepository.update(id, dto);
  }

  remove(id: number) {
    return this.drawMatchRepository.remove(id);
  }
}
