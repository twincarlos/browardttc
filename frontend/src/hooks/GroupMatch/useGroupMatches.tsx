'use client';
import { useAppSelector } from "../useAppSelector";
import { selectGroupMatchesByEventGroupId } from "@/store/slices/groupMatchSlice";

export default function useGroupMatches(eventGroupId: number) {
  const groupMatches = useAppSelector(selectGroupMatchesByEventGroupId(eventGroupId));

  return { groupMatches };
}