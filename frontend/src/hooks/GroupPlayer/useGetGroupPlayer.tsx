'use client';
import { useAppSelector } from '../useAppSelector';
import { selectGroupPlayerById } from '@/store/slices/groupPlayerSlice';

export default function useGetGroupPlayer(groupPlayerId: number) {
  const groupPlayer = useAppSelector((state) =>
    selectGroupPlayerById(state, groupPlayerId),
  );
  return { groupPlayer };
}