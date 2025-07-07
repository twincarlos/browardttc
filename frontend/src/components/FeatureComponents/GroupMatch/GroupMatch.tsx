'use client';
import './GroupMatch.css';
import Score from '../Score/Score';
import GroupPlayer from '../GroupPlayer/GroupPlayer';
import { EventGroup } from '@/types/eventGroupType';
import type { GroupMatch } from '@/types/groupMatchType';
import type { TournamentEvent } from '@/types/tournamentEventType';
import useGetGroupPlayer from '@/hooks/GroupPlayer/useGetGroupPlayer';
import GroupMatchHeader from './GroupMatchHeader';

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
  return (
    <div className="group-match br-1 bs-s bw-1 bc-1">
      <GroupMatchHeader
        groupMatch={groupMatch}
        tournamentEvent={tournamentEvent}
        eventGroup={eventGroup}
      />
      <div>
        <GroupPlayer groupPlayer={groupPlayer1} />
        <Score score={groupMatch.score} />
        <GroupPlayer groupPlayer={groupPlayer2} />
      </div>
    </div>
  );
}
