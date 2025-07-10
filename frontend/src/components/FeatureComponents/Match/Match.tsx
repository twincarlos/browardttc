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
import type { GroupPlayer } from '@/types/groupPlayerType';
import type { TournamentEvent } from '@/types/tournamentEventType';
import useGetGroupPlayer from '@/hooks/GroupPlayer/useGetGroupPlayer';

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

  const player1: { groupPlayer: GroupPlayer | undefined } =
    'event_group_id' in match
      ? useGetGroupPlayer(match.group_player1_id)
      : { groupPlayer: undefined };
  const player2: { groupPlayer: GroupPlayer | undefined } =
    'event_group_id' in match
      ? useGetGroupPlayer(match.group_player2_id)
      : { groupPlayer: undefined };

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
          <MatchPlayer matchPlayer={player1?.groupPlayer} />
          <GameScores gameScores={match.game_scores} />
          <MatchPlayer matchPlayer={player2?.groupPlayer} />
        </div>
      </div>
    </div>
  );
}
