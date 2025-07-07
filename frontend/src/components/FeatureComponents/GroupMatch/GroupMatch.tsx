'use client';
import './GroupMatch.css';
import { useMemo } from 'react';
import Score from '../Score/Score';
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

  const matchScore = useMemo(() => 
    determineMatchScore(groupMatch.game_scores, groupMatch.best_of),
    [groupMatch.game_scores, groupMatch.best_of]
  );

  return (
    <div className="group-match br-1 bs-s bw-1 bc-1">
      <GroupMatchHeader
        groupMatch={groupMatch}
        tournamentEvent={tournamentEvent}
        eventGroup={eventGroup}
      />
      <div className="f">
        <div className="group-match-scores f f-c jc-sb">
          <span className="group-match-score ta-c f jc-c ai-c fs-lg p-1">{matchScore.matchScore[0]}</span>
          <span className="group-match-score ta-c f jc-c ai-c fs-lg p-1">{matchScore.matchScore[1]}</span>
        </div>
        <div className="group-match-content f f-c jc-sa">
          <GroupPlayer groupPlayer={groupPlayer1} />
          <Score score={groupMatch.game_scores} />
          <GroupPlayer groupPlayer={groupPlayer2} />
        </div>
      </div>
    </div>
  );
}
