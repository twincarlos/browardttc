import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupPlayerDto } from './create-group-player.dto';

export class UpdateGroupPlayerDto extends PartialType(CreateGroupPlayerDto) {}
