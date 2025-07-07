import { Match } from "./matchType";

export interface GroupMatch extends Match {
    event_group_id: number;
    group_player1_id: number;
    group_player2_id: number;
}