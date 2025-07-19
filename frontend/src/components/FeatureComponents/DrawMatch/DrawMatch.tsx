'use client';
import { useMemo } from 'react';
import GameScores from '../Scores/GameScores';
import MatchScore from '../Scores/MatchScore';
import DrawMatchHeader from './DrawMatchHeader';
import DrawPlayer from '../DrawPlayer/DrawPlayer';
import { determineMatchScore } from '@/utils/match';
import Match from '../../StyledComponents/Match/Match';
import type { EventDraw } from '@/types/eventDrawType';
import type { DrawMatch } from '@/types/drawMatchType';
import type { TournamentEvent } from '@/types/tournamentEventType';
import useGetDrawPlayer from '@/hooks/DrawPlayer/useGetDrawPlayer';

export default function DrawMatch({
  tournamentEvent,
  eventDraw,
  drawMatch,
}: {
  tournamentEvent: TournamentEvent;
  eventDraw: EventDraw;
  drawMatch: DrawMatch;
}) {
  const matchScoreInfo = useMemo(
    () => determineMatchScore(drawMatch.game_scores, drawMatch.best_of),
    [drawMatch.game_scores, drawMatch.best_of],
  );

  const drawPlayer1 = useGetDrawPlayer(drawMatch.draw_player1_id || -1);
  const drawPlayer2 = useGetDrawPlayer(drawMatch.draw_player2_id || -1);

  return (
    <Match>
      <div className="draw-match">
        <DrawMatchHeader
          tournamentEvent={tournamentEvent}
          eventDraw={eventDraw}
          drawMatch={drawMatch}
        />
        <div className="f">
          <MatchScore matchScore={matchScoreInfo.matchScore} />
          <div className="match-content f fd-c jc-sa bl w-100">
            <DrawPlayer drawPlayer={drawPlayer1!} />
            <GameScores gameScores={drawMatch.game_scores} />
            <DrawPlayer drawPlayer={drawPlayer2!} />
          </div>
        </div>
      </div>
    </Match>
  );
}
