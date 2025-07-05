'use client';
import type { EventGroup } from '@/types/eventGroupType';
import GroupPlayer from './GroupPlayer';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectGroupPlayersByEventGroupId } from '@/store/slices/groupPlayerSlice';

export default function GroupPlayers({
  eventGroup,
}: {
  eventGroup: EventGroup;
}) {
  const groupPlayers = useAppSelector(
    selectGroupPlayersByEventGroupId(eventGroup.id),
  );
  return (
    <div className="group-players">
      {groupPlayers.map((groupPlayer) => (
        <GroupPlayer key={groupPlayer.id} groupPlayer={groupPlayer} />
      ))}
    </div>
  );
}
