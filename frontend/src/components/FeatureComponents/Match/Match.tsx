'use client';
import './Match.css';
import { useMemo } from 'react';
import GameScores from './GameScores';
import MatchScore from './MatchScore';
import MatchPlayer from './MatchPlayer';
import MatchHeader from './MatchHeader';
import { determineMatchScore } from '@/utils/match';
import type { DrawMatch } from '@/types/drawMatchType';
import type { EventDraw } from '@/types/eventDrawType';
import type { GroupMatch } from '@/types/groupMatchType';
import type { EventGroup } from '@/types/eventGroupType';
import type { TournamentEvent } from '@/types/tournamentEventType';
import useGetMatchPlayer from '@/hooks/MatchPlayer/useGetMatchPlayer';

export default function Match({
  tournamentEvent,
  stage,
  match,
}: {
  tournamentEvent: TournamentEvent;
  stage: EventGroup | EventDraw;
  match: GroupMatch | DrawMatch;
}) {
  const matchScoreInfo = useMemo(
    () => determineMatchScore(match.game_scores, match.best_of),
    [match.game_scores, match.best_of],
  );

  const { player1, player2 } = useGetMatchPlayer(match);

  return (
    <div
      className="match b bra"
      style={{ borderColor: `var(--status-${match.status})` }}
    >
      <MatchHeader
        tournamentEvent={tournamentEvent}
        stage={stage}
        match={match}
      />
      <div className="f">
        <MatchScore matchScore={matchScoreInfo.matchScore} />
        <div className="match-content f f-c jc-sa bl w-100">
          <MatchPlayer matchPlayer={player1} />
          <GameScores gameScores={match.game_scores} />
          <MatchPlayer matchPlayer={player2} />
        </div>
      </div>
    </div>
  );
}
