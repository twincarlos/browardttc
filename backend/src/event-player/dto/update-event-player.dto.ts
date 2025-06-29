import { PartialType } from '@nestjs/mapped-types';
import { CreateEventPlayerDto } from './create-event-player.dto';

export class UpdateEventPlayerDto extends PartialType(CreateEventPlayerDto) {}
