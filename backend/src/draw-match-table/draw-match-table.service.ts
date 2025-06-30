import { Injectable } from '@nestjs/common';
import { CreateDrawMatchTableDto } from './dto/create-draw-match-table.dto';
import { UpdateDrawMatchTableDto } from './dto/update-draw-match-table.dto';
import { DrawMatchTableRepository } from './draw-match-table.repository';

@Injectable()
export class DrawMatchTableService {
  constructor(
    private readonly drawMatchTableRepository: DrawMatchTableRepository,
  ) {}

  create(dto: CreateDrawMatchTableDto) {
    return this.drawMatchTableRepository.create(dto);
  }

  findAllByTournamentId(tournament_id: number) {
    return this.drawMatchTableRepository.findAllByTournamentId(tournament_id);
  }

  findAllByTournamentEventId(tournament_event_id: number) {
    return this.drawMatchTableRepository.findAllByTournamentEventId(
      tournament_event_id,
    );
  }

  findOne(id: number) {
    return this.drawMatchTableRepository.findOne(id);
  }

  update(id: number, dto: UpdateDrawMatchTableDto) {
    return this.drawMatchTableRepository.update(id, dto);
  }

  remove(id: number) {
    return this.drawMatchTableRepository.remove(id);
  }
}
