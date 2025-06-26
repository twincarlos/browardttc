export class CreateTournamentDto {
  name: string;
  status: 'upcoming' | 'open' | 'closed' | 'in_progress' | 'finished';
  registration_deadline?: string;
  rating_cutoff?: string;
  date?: string;
  time?: string;
}
