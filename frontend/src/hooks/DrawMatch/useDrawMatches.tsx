'use client';
import { useAppSelector } from '../useAppSelector';
import { selectDrawMatchesByEventDrawId } from '@/store/slices/drawMatchSlice';

export default function useDrawMatches(eventDrawId: number) {
  const drawMatches = useAppSelector(selectDrawMatchesByEventDrawId(eventDrawId));

  return { drawMatches };
}