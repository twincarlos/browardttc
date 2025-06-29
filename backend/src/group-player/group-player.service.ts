import { Injectable } from '@nestjs/common';
import { CreateGroupPlayerDto } from './dto/create-group-player.dto';
import { UpdateGroupPlayerDto } from './dto/update-group-player.dto';
import { GroupPlayerRepository } from './group-player.repository';

@Injectable()
export class GroupPlayerService {
  constructor(private readonly groupPlayerRepository: GroupPlayerRepository) {}

  create(dto: CreateGroupPlayerDto) {
    return this.groupPlayerRepository.create(dto);
  }

  findAll() {
    return this.groupPlayerRepository.findAll();
  }

  findOne(id: number) {
    return this.groupPlayerRepository.findOne(id);
  }

  update(id: number, dto: UpdateGroupPlayerDto) {
    return this.groupPlayerRepository.update(id, dto);
  }

  remove(id: number) {
    return this.groupPlayerRepository.remove(id);
  }
}
