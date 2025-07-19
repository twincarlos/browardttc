'use client';
import { useMemo } from 'react';
import GameScores from '../Scores/GameScores';
import MatchScore from '../Scores/MatchScore';
import GroupMatchHeader from './GroupMatchHeader';
import { determineMatchScore } from '@/utils/match';
import GroupPlayer from '../GroupPlayer/GroupPlayer';
import Match from '../../StyledComponents/Match/Match';
import type { EventGroup } from '@/types/eventGroupType';
import type { GroupMatch } from '@/types/groupMatchType';
import type { TournamentEvent } from '@/types/tournamentEventType';
import useGetGroupPlayer from '@/hooks/GroupPlayer/useGetGroupPlayer';

export default function GroupMatch({
  tournamentEvent,
  eventGroup,
  groupMatch,
}: {
  tournamentEvent: TournamentEvent;
  eventGroup: EventGroup;
  groupMatch: GroupMatch;
}) {
  const matchScoreInfo = useMemo(
    () => determineMatchScore(groupMatch.game_scores, groupMatch.best_of),
    [groupMatch.game_scores, groupMatch.best_of],
  );

  const groupPlayer1 = useGetGroupPlayer(groupMatch.group_player1_id);
  const groupPlayer2 = useGetGroupPlayer(groupMatch.group_player2_id);

  return (
    <Match>
      <div className="group-match">
        <GroupMatchHeader
          tournamentEvent={tournamentEvent}
          eventGroup={eventGroup}
          groupMatch={groupMatch}
        />
        <div className="f">
          <MatchScore matchScore={matchScoreInfo.matchScore} />
          <div className="match-content f fd-c jc-sa bl w-100">
            <GroupPlayer groupPlayer={groupPlayer1!} />
            <GameScores gameScores={groupMatch.game_scores} />
            <GroupPlayer groupPlayer={groupPlayer2!} />
          </div>
        </div>
      </div>
    </Match>
  );
}
