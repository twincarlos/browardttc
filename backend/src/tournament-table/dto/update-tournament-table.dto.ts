import { PartialType } from '@nestjs/mapped-types';
import { CreateTournamentTableDto } from './create-tournament-table.dto';

export class UpdateTournamentTableDto extends PartialType(CreateTournamentTableDto) {}