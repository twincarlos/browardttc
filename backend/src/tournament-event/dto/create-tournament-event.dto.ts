export class CreateTournamentEventDto {
  name: string;
  date?: string;
  time?: string;
  entry_fee?: string;
  tournament_id: number;
  max_players?: number;
  status: 'upcoming' | 'in_progress' | 'finished';
  stage?: 'groups' | 'draw';
  type: 'singles' | 'teams' | 'doubles';
  format: 'rr' | 'grr' | 'single_elimination' | 'handicap';
  max_rating?: number;
  min_age?: number;
  max_age?: number;
  unrated_may_advance: boolean;
}
