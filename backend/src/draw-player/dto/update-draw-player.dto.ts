import { PartialType } from '@nestjs/mapped-types';
import { CreateDrawPlayerDto } from './create-draw-player.dto';

export class UpdateDrawPlayerDto extends PartialType(CreateDrawPlayerDto) {}
