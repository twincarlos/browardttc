export type DrawMatchStatus = 'upcoming' | 'ready' | 'in_progress' | 'pending' | 'finished' | 'forfeited';

export interface DrawMatch {
    id: number;
    draw_player1_id?: number;
    draw_player2_id?: number;
    has_bye: boolean;
    score?: string;
    winner_id?: number;
    status: DrawMatchStatus;
    player1_ready: boolean;
    player2_ready: boolean;
    forfeited_player_id?: number;
    date?: string;
    time?: string;
    round: number;
    sequence: number;
    started_at?: string;
    completed_at?: string;
    created_at: string;
    updated_at: string;
}