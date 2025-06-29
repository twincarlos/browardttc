import { PartialType } from '@nestjs/mapped-types';
import { CreateDrawMatchDto } from './create-draw-match.dto';

export class UpdateDrawMatchDto extends PartialType(CreateDrawMatchDto) {}
