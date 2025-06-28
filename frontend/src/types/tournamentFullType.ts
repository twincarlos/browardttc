import { DrawMatchTable } from "./drawMatchTableType";
import { DrawMatch } from "./drawMatchType";
import { DrawPlayer } from "./drawPlayerType";
import { EventDraw } from "./eventDrawType";
import { EventGroup } from "./eventGroupType";
import { EventPlayer } from "./eventPlayerType";
import { GroupMatchTable } from "./groupMatchTableType";
import { GroupMatch } from "./groupMatchType";
import { GroupPlayer } from "./groupPlayerType";
import { TournamentEvent } from "./tournamentEventType";
import { TournamentPlayer } from "./tournamentPlayerType";
import { TournamentTable } from "./tournamentTableType";
import { Tournament } from "./tournamentType";

export interface TournamentFull {
    tournament: Tournament;
    tournamentPlayers: TournamentPlayer[];
    tournamentEvents: TournamentEvent[];
    tournamentTables: TournamentTable[];
    eventPlayers: EventPlayer[];
    eventGroups: EventGroup[];
    eventDraw: EventDraw;
    groupPlayers: GroupPlayer[];
    drawPlayers: DrawPlayer[];
    groupMatches: GroupMatch[];
    drawMatches: DrawMatch[];
    groupMatchTables: GroupMatchTable[];
    drawMatchTables: DrawMatchTable[];
}