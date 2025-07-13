import type { DrawMatch } from '@/types/drawMatchType';
import type { GroupMatch } from '@/types/groupMatchType';
import type { DrawPlayer } from '@/types/drawPlayerType';
import type { GroupPlayer } from '@/types/groupPlayerType';
import useGetDrawPlayer from '../DrawPlayer/useGetDrawPlayer';
import useGetGroupPlayer from '../GroupPlayer/useGetGroupPlayer';

export default function useGetMatchPlayer(match: GroupMatch | DrawMatch): {
  player1: GroupPlayer | DrawPlayer | undefined;
  player2: GroupPlayer | DrawPlayer | undefined;
} {
  const player1 =
    'event_group_id' in match
      ? useGetGroupPlayer(match.group_player1_id)
      : useGetDrawPlayer(match.draw_player1_id || -1);
  const player2 =
    'event_group_id' in match
      ? useGetGroupPlayer(match.group_player2_id)
      : useGetDrawPlayer(match.draw_player2_id || -1);
  return { player1, player2 };
}
