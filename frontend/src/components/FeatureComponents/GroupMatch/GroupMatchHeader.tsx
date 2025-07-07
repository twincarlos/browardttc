import Status from '@/components/StyledComponents/Status/Status';
import { EventGroup } from '@/types/eventGroupType';
import type { GroupMatch } from '@/types/groupMatchType';
import type { TournamentEvent } from '@/types/tournamentEventType';
import { showDay, formatTime } from '@/utils/formatDate';

export default function GroupMatchHeader({
  groupMatch,
  tournamentEvent,
  eventGroup,
}: {
  groupMatch: GroupMatch;
  tournamentEvent: TournamentEvent;
  eventGroup: EventGroup;
}) {
  return (
    <div>
      <span>{tournamentEvent.name} • Group {eventGroup.number}</span>
      <div>
        <span>{showDay(eventGroup.date)} • {formatTime(eventGroup.time)}</span>
        <Status status={groupMatch.status} />
      </div>
    </div>
  );
}
