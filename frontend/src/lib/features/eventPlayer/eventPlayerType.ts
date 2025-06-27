export interface EventPlayer {
    id: number;
    tournament_event_id: number;
    tournament_player_id: number;
    has_paid: boolean;
    created_at: string;
    updated_at: string;
}