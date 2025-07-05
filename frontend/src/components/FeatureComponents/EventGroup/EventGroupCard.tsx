import Card from "@/components/StyledComponents/Card/Card";
import { EventGroup } from "@/types/eventGroupType";
import GroupPlayers from "../GroupPlayer/GroupPlayers";

export default function EventGroupCard({ eventGroup }: { eventGroup: EventGroup }) {
    return (
        <Card>
            <GroupPlayers eventGroup={eventGroup} />
        </Card>
    )
}