'use client';
import { useAppSelector } from '../useAppSelector';
import type { DrawPlayer } from '@/types/drawPlayerType';
import { selectDrawPlayerById } from '@/store/slices/drawPlayerSlice';

export default function useGetDrawPlayer(drawPlayerId: number): DrawPlayer | undefined {
  const drawPlayer = useAppSelector((state) =>
    selectDrawPlayerById(state, drawPlayerId),
  );
  return drawPlayer;
}