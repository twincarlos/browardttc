'use client';
import { useAppSelector } from '../useAppSelector';
import type { GroupPlayer } from '@/types/groupPlayerType';
import { selectGroupPlayerById } from '@/store/slices/groupPlayerSlice';

export default function useGetGroupPlayer(groupPlayerId: number): GroupPlayer | undefined {
  const groupPlayer = useAppSelector((state) =>
    selectGroupPlayerById(state, groupPlayerId),
  );
  return groupPlayer;
}