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
    <div className="group-match-header f jc-sb ai-fs p-1">
      <div className="f f-c fs-sm">
        <span>
          {tournamentEvent.name} • Group {eventGroup.number}
        </span>
        <span>
          {showDay(eventGroup.date)} • {formatTime(eventGroup.time)}
        </span>
      </div>
      <Status status={groupMatch.status} />
    </div>
  );
}
