'use client';
import './GroupMatch.css';
import { useMemo } from 'react';
import GameScore from '../Score/GameScore';
import MatchScore from '../Score/MatchScore';
import GroupMatchHeader from './GroupMatchHeader';
import { EventGroup } from '@/types/eventGroupType';
import { determineMatchScore } from '@/utils/match';
import GroupPlayer from '../GroupPlayer/GroupPlayer';
import type { GroupMatch } from '@/types/groupMatchType';
import type { TournamentEvent } from '@/types/tournamentEventType';
import useGetGroupPlayer from '@/hooks/GroupPlayer/useGetGroupPlayer';

export default function GroupMatch({
  groupMatch,
  tournamentEvent,
  eventGroup,
}: {
  groupMatch: GroupMatch;
  tournamentEvent: TournamentEvent;
  eventGroup: EventGroup;
}) {
  const { groupPlayer: groupPlayer1 } = useGetGroupPlayer(
    groupMatch.group_player1_id,
  );
  const { groupPlayer: groupPlayer2 } = useGetGroupPlayer(
    groupMatch.group_player2_id,
  );

  const matchScoreInfo = useMemo(() => 
    determineMatchScore(groupMatch.game_scores, groupMatch.best_of),
    [groupMatch.game_scores, groupMatch.best_of]
  );

  return (
    <div className="group-match b bra">
      <GroupMatchHeader
        groupMatch={groupMatch}
        tournamentEvent={tournamentEvent}
        eventGroup={eventGroup}
      />
      <div className="f">
        <MatchScore matchScore={matchScoreInfo.matchScore} />
        <div className="group-match-content f f-c jc-sa bl w-100">
          <GroupPlayer groupPlayer={groupPlayer1} />
          <GameScore gameScores={groupMatch.game_scores} />
          <GroupPlayer groupPlayer={groupPlayer2} />
        </div>
      </div>
    </div>
  );
}
