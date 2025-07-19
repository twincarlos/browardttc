import './EventGroup.css';
import { EventGroup } from '@/types/eventGroupType';
import GroupPlayers from '../GroupPlayer/GroupPlayers';
import GroupMatches from '../GroupMatch/GroupMatches';
import { TournamentEvent } from '@/types/tournamentEventType';

export default function EventGroupCard({
  eventGroup,
  tournamentEvent,
}: {
  eventGroup: EventGroup;
  tournamentEvent: TournamentEvent;
}) {
  return (
    <div className="event-group bra p-1 f fd-c">
      <GroupPlayers eventGroup={eventGroup} />
      <GroupMatches eventGroup={eventGroup} tournamentEvent={tournamentEvent} />
    </div>
  );
}
