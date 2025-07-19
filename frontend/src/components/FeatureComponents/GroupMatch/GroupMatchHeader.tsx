import type { EventGroup } from "@/types/eventGroupType";
import type { GroupMatch } from "@/types/groupMatchType";
import { showDay, formatTime } from "@/utils/formatDate";
import type { TournamentEvent } from "@/types/tournamentEventType";
import Status from "@/components/StyledComponents/Status/Status";

export default function GroupMatchHeader({
    tournamentEvent,
    eventGroup,
    groupMatch
}: {
    tournamentEvent: TournamentEvent;
    eventGroup: EventGroup;
    groupMatch: GroupMatch;
}) {
  return (
    <div className="match-header f jc-sb ai-fs p-1 bb">
      <div className="f fd-c fs-sm">
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
