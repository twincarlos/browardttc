export type GameScore = [number, number];
export type MatchScore = [number, number];
export type MatchStatus = 'upcoming' | 'ready' | 'in_progress' | 'pending' | 'finished' | 'forfeited';
export type MatchBestOf = 1 | 3 | 5 | 7 | 9;

export interface Match {
    id: number;
    best_of: MatchBestOf;
    game_scores?: GameScore[];
    match_score?: MatchScore;
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

export interface MatchInfo {
    match_score: MatchScore;
    is_valid: boolean;
    winner_id: number;
    status: MatchStatus;
    completed_at: string;
}