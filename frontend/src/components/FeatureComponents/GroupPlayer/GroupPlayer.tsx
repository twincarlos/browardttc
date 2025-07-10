'use client';
import EventPlayer from '../EventPlayer/EventPlayer';
import { useAppSelector } from '@/hooks/useAppSelector';
import type { GroupPlayer } from '@/types/groupPlayerType';
import { selectEventPlayerById } from '@/store/slices/eventPlayerSlice';

export default function GroupPlayer({
  groupPlayer,
}: {
  groupPlayer: GroupPlayer;
}) {
  const eventPlayer = useAppSelector((state) =>
    selectEventPlayerById(state, groupPlayer.event_player_id),
  );
  return (
    <div className="group-player p-1">
      <EventPlayer eventPlayer={eventPlayer} />
    </div>
  );
}
