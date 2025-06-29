import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDrawDto } from './create-event-draw.dto';

export class UpdateEventDrawDto extends PartialType(CreateEventDrawDto) {}
