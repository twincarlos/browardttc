import { Injectable } from '@nestjs/common';
import { CreateGroupMatchTableDto } from './dto/create-group-match-table.dto';
import { UpdateGroupMatchTableDto } from './dto/update-group-match-table.dto';
import { GroupMatchTableRepository } from './group-match-table.repository';

@Injectable()
export class GroupMatchTableService {
  constructor(private readonly groupMatchTableRepository: GroupMatchTableRepository) {}

  create(dto: CreateGroupMatchTableDto) {
    return this.groupMatchTableRepository.create(dto);
  }

  findAll() {
    return this.groupMatchTableRepository.findAll();
  }

  findOne(id: number) {
    return this.groupMatchTableRepository.findOne(id);
  }

  update(id: number, dto: UpdateGroupMatchTableDto) {
    return this.groupMatchTableRepository.update(id, dto);
  }

  remove(id: number) {
    return this.groupMatchTableRepository.remove(id);
  }
}
