'use client';
import GroupPlayer from '../GroupPlayer/GroupPlayer';
import type { GroupMatch } from '@/types/groupMatchType';
import useGetGroupPlayer from '@/hooks/GroupPlayer/useGetGroupPlayer';

export default function GroupMatch({ groupMatch }: { groupMatch: GroupMatch }) {
  const { groupPlayer: groupPlayer1 } = useGetGroupPlayer(
    groupMatch.group_player1_id,
  );
  const { groupPlayer: groupPlayer2 } = useGetGroupPlayer(
    groupMatch.group_player2_id,
  );
  return (
    <div>
      <GroupPlayer groupPlayer={groupPlayer1} />
      <GroupPlayer groupPlayer={groupPlayer2} />
    </div>
  );
}
