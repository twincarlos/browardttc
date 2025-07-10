'use client';
import Match from '../Match/Match';
import type { EventGroup } from '@/types/eventGroupType';
import useGroupMatches from '@/hooks/GroupMatch/useGroupMatches';
import type { TournamentEvent } from '@/types/tournamentEventType';
import type { GroupMatch as GroupMatchType } from '@/types/groupMatchType';

export default function GroupMatches({
  eventGroup,
  tournamentEvent,
}: {
  eventGroup: EventGroup;
  tournamentEvent: TournamentEvent;
}) {
  const { groupMatches } = useGroupMatches(eventGroup.id);

  return (
    <div className="group-matches f f-c g-1">
      {groupMatches.map((groupMatch: GroupMatchType) => (
        <Match
          key={groupMatch.id}
          match={groupMatch}
          tournamentEvent={tournamentEvent}
          stage={eventGroup}
        />
      ))}
    </div>
  );
}
