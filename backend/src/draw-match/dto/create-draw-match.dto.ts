export class CreateDrawMatchDto {
  event_draw_id: number;
  draw_player1_id: number;
  draw_player2_id: number;
  best_of: number;
  has_bye: boolean;
  score?: [number | null, number | null][];
  winner_id?: number;
  status: 'upcoming' | 'in_progress' | 'finished';
  player1_ready: boolean;
  player2_ready: boolean;
  forfeited_player_id?: number;
  date?: string;
  time?: string;
  round: number;
  sequence: number;
  started_at?: Date;
  completed_at?: Date;
}
