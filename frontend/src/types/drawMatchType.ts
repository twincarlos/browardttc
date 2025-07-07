import { Match } from "./matchType";

export interface DrawMatch extends Match {
    event_draw_id: number;
    draw_player1_id?: number;
    draw_player2_id?: number;
    has_bye: boolean;
    date?: string;
    time?: string;
    round: number;
}