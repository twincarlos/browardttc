import type { GroupMatch } from '@/types/groupMatchType';

export default function GroupMatch({ groupMatch }: { groupMatch: GroupMatch }) {
  return <div>{groupMatch.id}</div>;
}