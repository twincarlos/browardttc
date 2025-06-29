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

  findAll() {
    return this.groupMatchRepository.findAll();
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
