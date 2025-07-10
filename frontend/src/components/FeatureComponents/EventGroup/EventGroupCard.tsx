import './EventGroup.css';
import Card from '@/components/StyledComponents/Card/Card';
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
    <Card>
      <div className="event-group">
        <GroupPlayers eventGroup={eventGroup} />
        <GroupMatches
          eventGroup={eventGroup}
          tournamentEvent={tournamentEvent}
        />
      </div>
    </Card>
  );
}
