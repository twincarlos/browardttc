import { Injectable } from '@nestjs/common';
import { CreateGroupMatchDto } from './dto/create-group-match.dto';
import { UpdateGroupMatchDto } from './dto/update-group-match.dto';
import { GroupMatchRepository } from './group-match.repository';

@Injectable()
export class GroupMatchService {
  constructor(private readonly groupMatchRepository: GroupMatchRepository) {}

  create(dto: CreateGroupMatchDto) {
    return this.groupMatchRepository.create(dto);
  }

  findAllByTournamentId(tournament_id: number) {
    return this.groupMatchRepository.findAllByTournamentId(tournament_id);
  }

  findAllByTournamentEventId(tournament_event_id: number) {
    return this.groupMatchRepository.findAllByTournamentEventId(
      tournament_event_id,
    );
  }

  findOne(id: number) {
    return this.groupMatchRepository.findOne(id);
  }

  update(id: number, dto: UpdateGroupMatchDto) {
    return this.groupMatchRepository.update(id, dto);
  }

  remove(id: number) {
    return this.groupMatchRepository.remove(id);
  }
}
