'use client';
import EventPlayer from '../EventPlayer/EventPlayer';
import { useAppSelector } from '@/hooks/useAppSelector';
import type { DrawPlayer } from '@/types/drawPlayerType';
import { selectEventPlayerById } from '@/store/slices/eventPlayerSlice';

export default function DrawPlayer({
  drawPlayer,
}: {
  drawPlayer?: DrawPlayer;
}) {
  const eventPlayer = useAppSelector((state) =>
    selectEventPlayerById(state, drawPlayer?.event_player_id || -1),
  );
  if (!eventPlayer) return <div>Bye</div>;
  return (
    <div className="draw-player p-1">
      <EventPlayer eventPlayer={eventPlayer} />
    </div>
  );
}
