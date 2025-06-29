import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupMatchDto } from './create-group-match.dto';

export class UpdateGroupMatchDto extends PartialType(CreateGroupMatchDto) {}
