import { Injectable } from '@nestjs/common';
import { CreateDrawMatchTableDto } from './dto/create-draw-match-table.dto';
import { UpdateDrawMatchTableDto } from './dto/update-draw-match-table.dto';
import { DrawMatchTableRepository } from './draw-match-table.repository';

@Injectable()
export class DrawMatchTableService {
  constructor(private readonly drawMatchTableRepository: DrawMatchTableRepository) {}

  create(dto: CreateDrawMatchTableDto) {
    return this.drawMatchTableRepository.create(dto);
  }

  findAll() {
    return this.drawMatchTableRepository.findAll();
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
