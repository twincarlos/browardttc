import './Match.css';
import type { DrawMatch } from '@/types/drawMatchType';
import type { EventDraw } from '@/types/eventDrawType';
import type { EventGroup } from '@/types/eventGroupType';
import type { GroupMatch } from '@/types/groupMatchType';
import { showDay, formatTime } from '@/utils/formatDate';
import Status from '@/components/StyledComponents/Status/Status';
import type { TournamentEvent } from '@/types/tournamentEventType';

export default function MatchHeader({
  tournamentEvent,
  stage,
  match,
}: {
  tournamentEvent: TournamentEvent;
  stage: EventGroup | EventDraw;
  match: GroupMatch | DrawMatch;
}) {
  const stageInfo =
    'number' in stage
      ? `Group ${stage.number}`
      : 'round' in match
      ? `Round of ${match.round}`
      : '';
  const date =
    'number' in stage ? stage.date : 'round' in match ? match.date : undefined;
  const time =
    'number' in stage ? stage.time : 'round' in match ? match.time : undefined;

  return (
    <div className="match-header f jc-sb ai-fs p-1 bb">
      <div className="f f-c fs-sm">
        <span>
          {tournamentEvent.name} • {stageInfo}
        </span>
        <span>
          {showDay(date)} • {formatTime(time)}
        </span>
      </div>
      <Status status={match.status} />
    </div>
  );
}
