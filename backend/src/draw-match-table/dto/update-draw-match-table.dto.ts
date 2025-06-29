import { PartialType } from '@nestjs/mapped-types';
import { CreateDrawMatchTableDto } from './create-draw-match-table.dto';

export class UpdateDrawMatchTableDto extends PartialType(CreateDrawMatchTableDto) {}
