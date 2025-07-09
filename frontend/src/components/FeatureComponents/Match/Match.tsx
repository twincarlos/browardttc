'use client';
import './Match.css';
import { DrawMatch } from "@/types/drawMatchType";
import type { DrawPlayer as DrawPlayerType } from "@/types/drawPlayerType";
import { GroupMatch } from "@/types/groupMatchType";
import type { GroupPlayer as GroupPlayerType } from "@/types/groupPlayerType";
import { TournamentEvent } from "@/types/tournamentEventType";
import { EventGroup } from "@/types/eventGroupType";
import { EventDraw } from "@/types/eventDrawType";
import MatchHeader from "./MatchHeader";
import GameScores from "./GameScores";
import { useMemo } from "react";
import MatchScore from "./MatchScore";
import { determineMatchScore } from "@/utils/match";
import MatchPlayer from "./MatchPlayer";

export default function Match({ tournamentEvent, stage, match, player1, player2 }: { tournamentEvent: TournamentEvent, stage: EventGroup | EventDraw, match: GroupMatch | DrawMatch, player1: GroupPlayerType | DrawPlayerType, player2: GroupPlayerType | DrawPlayerType }) {
    const matchScoreInfo = useMemo(() => 
        determineMatchScore(match.game_scores, match.best_of),
        [match.game_scores, match.best_of]
      );
    return (
        <div className="match b bra">
            <MatchHeader tournamentEvent={tournamentEvent} stage={stage} match={match} />
            <div className="f">
                <MatchScore matchScore={matchScoreInfo.matchScore} />
                <div className="match-content f f-c jc-sa bl w-100">
                    <MatchPlayer matchPlayer={player1} />
                    <GameScores gameScores={match.game_scores} />
                    <MatchPlayer matchPlayer={player2} />
                </div>
            </div>
        </div>
    )
}