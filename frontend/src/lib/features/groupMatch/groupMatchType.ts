export type GroupMatchStatus = 'upcoming' | 'ready' | 'in_progress' | 'pending' | 'finished' | 'forfeited';

export interface GroupMatch {
    id: number;
    group_player1_id: number;
    group_player2_id: number;
    score: string;
    winner_id: number;
    sequence: number;
    status: GroupMatchStatus;
    player1_ready: boolean;
    player2_ready: boolean;
    forfeited_player_id: number;
    created_at: string;
    updated_at: string;
    started_at: string;
    completed_at: string;
}