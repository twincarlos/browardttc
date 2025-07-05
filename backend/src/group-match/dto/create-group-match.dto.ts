export class CreateGroupMatchDto {
  event_group_id: number;
  group_player1_id: number;
  group_player2_id: number;
  score?: string;
  winner_id?: number;
  sequence: number;
  status: 'upcoming' | 'in_progress' | 'finished';
  player1_ready: boolean;
  player2_ready: boolean;
  forfeited_player_id?: number;
  started_at?: Date;
  completed_at?: Date;
}