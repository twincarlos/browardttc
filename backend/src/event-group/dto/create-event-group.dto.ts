export class CreateEventGroupDto {
  tournament_event_id: number;
  number: number;
  date: string;
  time: string;
  status: 'upcoming' | 'in_progress' | 'finished';
}