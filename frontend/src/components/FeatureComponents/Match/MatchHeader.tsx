import Status from "@/components/StyledComponents/Status/Status";
import { DrawMatch } from "@/types/drawMatchType";
import { EventDraw } from "@/types/eventDrawType";
import { EventGroup } from "@/types/eventGroupType";
import { GroupMatch } from "@/types/groupMatchType";
import { TournamentEvent } from "@/types/tournamentEventType";
import { showDay, formatTime } from "@/utils/formatDate";

export default function MatchHeader({ tournamentEvent, stage, match }: { tournamentEvent: TournamentEvent, stage: EventGroup | EventDraw, match: GroupMatch | DrawMatch }) {
    const stageInfo = 'number' in stage ? `Group ${stage.number}` : ('round' in match ? `Round of ${match.round}` : '');
    const date = 'number' in stage ? stage.date : ('round' in match ? match.date : undefined);
    const time = 'number' in stage ? stage.time : ('round' in match ? match.time : undefined);

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
    )
}