'use client';
import GroupMatch from './GroupMatch';
import type { EventGroup } from '@/types/eventGroupType';
import useGroupMatches from '@/hooks/GroupMatch/useGroupMatches';
import type { GroupMatch as GroupMatchType } from '@/types/groupMatchType';

export default function GroupMatches({ eventGroup }: { eventGroup: EventGroup }) {
  const { groupMatches } = useGroupMatches(eventGroup.id);

  return (
    <div>
      {groupMatches.map((groupMatch: GroupMatchType) => (
        <GroupMatch key={groupMatch.id} groupMatch={groupMatch} />
      ))}
    </div>
  );
}