import Card from "@/components/StyledComponents/Card/Card";
import { EventGroup } from "@/types/eventGroupType";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectGroupPlayersByEventGroupId } from "@/store/slices/groupPlayerSlice";
import GroupPlayer from "../GroupPlayer/GroupPlayer";

export default function EventGroupCard({ eventGroup }: { eventGroup: EventGroup }) {
    const groupPlayers = useAppSelector(selectGroupPlayersByEventGroupId(eventGroup.id));
    return (
        <Card>
            {groupPlayers.map((groupPlayer) => (
                <GroupPlayer key={groupPlayer.id} groupPlayer={groupPlayer} />
            ))}
        </Card>
    )
}