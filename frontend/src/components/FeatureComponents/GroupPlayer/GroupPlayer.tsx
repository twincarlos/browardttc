'use client';
import { memo } from 'react';
import './GroupPlayer.css';
import type { GroupPlayer } from '@/types/groupPlayerType';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectEventPlayerById } from '@/store/slices/eventPlayerSlice';
import EventPlayer from '../EventPlayer/EventPlayer';

function GroupPlayer({
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

export default memo(GroupPlayer);
