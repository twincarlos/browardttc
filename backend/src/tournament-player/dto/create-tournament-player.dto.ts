export class CreateTournamentPlayerDto {
  name: string;
  birthday?: string;
  usatt?: number;
  tournament_rating: number;
  actual_rating: number;
  club?: string;
  location?: string;
  tournament_id: number;
}
