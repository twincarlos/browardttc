'use client';
import './EventPlayer.css';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectEventPlayerById } from '@/store/slices/eventPlayerSlice';

export default function EventPlayer({
  eventPlayerId,
}: {
  eventPlayerId: number;
}) {
  const eventPlayer = useAppSelector((state) => selectEventPlayerById(state, eventPlayerId));
  return <div className="event-player">{eventPlayer.id}</div>;
}
