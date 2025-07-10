'use client';
import EventPlayer from '../EventPlayer/EventPlayer';
import { useAppSelector } from '@/hooks/useAppSelector';
import type { DrawPlayer } from '@/types/drawPlayerType';
import type { GroupPlayer } from '@/types/groupPlayerType';
import { selectEventPlayerById } from '@/store/slices/eventPlayerSlice';

export default function MatchPlayer({
  matchPlayer,
}: {
  matchPlayer: GroupPlayer | DrawPlayer | undefined;
}) {
  if (!matchPlayer) {
    return null;
  }
  const eventPlayer = useAppSelector((state) =>
    selectEventPlayerById(state, matchPlayer.event_player_id),
  );
  return (
    <div className="match-player">
      <EventPlayer eventPlayer={eventPlayer} />
    </div>
  );
}
