export type MatchScore = [number | null, number | null];
export type MatchStatus = 'upcoming' | 'ready' | 'in_progress' | 'pending' | 'finished' | 'forfeited';

export interface Match {
    id: number;
    best_of: number;
    score?: MatchScore[];
    winner_id?: number;
    sequence: number;
    status: MatchStatus;
    player1_ready: boolean;
    player2_ready: boolean;
    forfeited_player_id?: number;
    created_at: string;
    updated_at: string;
    started_at?: string;
    completed_at?: string;
}