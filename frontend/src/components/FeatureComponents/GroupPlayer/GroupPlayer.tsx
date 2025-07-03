'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectGroupPlayerById } from '@/store/slices/groupPlayerSlice';
import './GroupPlayer.css';

export default function GroupPlayer({
  groupPlayerId,
}: {
  groupPlayerId: number;
}) {
  const groupPlayer = useAppSelector((state) => selectGroupPlayerById(state, groupPlayerId));
  return <div className="group-player">{groupPlayer.id}</div>;
}