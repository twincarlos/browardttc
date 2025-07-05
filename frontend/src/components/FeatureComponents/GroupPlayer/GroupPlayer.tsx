'use client';
import './GroupPlayer.css';
import type { GroupPlayer } from '@/types/groupPlayerType';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectEventPlayerById } from '@/store/slices/eventPlayerSlice';
import EventPlayer from '../EventPlayer/EventPlayer';

export default function GroupPlayer({
  groupPlayer,
}: {
  groupPlayer: GroupPlayer;
}) {
  const eventPlayer = useAppSelector((state) =>
    selectEventPlayerById(state, groupPlayer.event_player_id),
  );
  return (
    <div className="group-player">
      <EventPlayer eventPlayer={eventPlayer} />
    </div>
  );
}
