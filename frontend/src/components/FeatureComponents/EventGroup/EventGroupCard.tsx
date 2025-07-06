import Card from "@/components/StyledComponents/Card/Card";
import { EventGroup } from "@/types/eventGroupType";
import GroupPlayers from "../GroupPlayer/GroupPlayers";
import GroupMatches from "../GroupMatch/GroupMatches";

export default function EventGroupCard({ eventGroup }: { eventGroup: EventGroup }) {
    return (
        <Card>
            <GroupPlayers eventGroup={eventGroup} />
            <GroupMatches eventGroup={eventGroup} />
        </Card>
    )
}