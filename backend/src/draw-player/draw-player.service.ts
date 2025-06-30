import { Injectable } from '@nestjs/common';
import { CreateDrawPlayerDto } from './dto/create-draw-player.dto';
import { UpdateDrawPlayerDto } from './dto/update-draw-player.dto';
import { DrawPlayerRepository } from './draw-player.repository';

@Injectable()
export class DrawPlayerService {
  constructor(private readonly drawPlayerRepository: DrawPlayerRepository) {}

  create(dto: CreateDrawPlayerDto) {
    return this.drawPlayerRepository.create(dto);
  }

  findAllByTournamentId(tournament_id: number) {
    return this.drawPlayerRepository.findAllByTournamentId(tournament_id);
  }

  findAllByTournamentEventId(tournament_event_id: number) {
    return this.drawPlayerRepository.findAllByTournamentEventId(
      tournament_event_id,
    );
  }

  findOne(id: number) {
    return this.drawPlayerRepository.findOne(id);
  }

  update(id: number, dto: UpdateDrawPlayerDto) {
    return this.drawPlayerRepository.update(id, dto);
  }

  remove(id: number) {
    return this.drawPlayerRepository.remove(id);
  }
}
