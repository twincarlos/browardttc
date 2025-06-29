import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupMatchTableDto } from './create-group-match-table.dto';

export class UpdateGroupMatchTableDto extends PartialType(CreateGroupMatchTableDto) {}
