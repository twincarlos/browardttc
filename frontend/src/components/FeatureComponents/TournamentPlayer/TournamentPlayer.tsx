import './TournamentPlayer.css';
import type { TournamentPlayer } from '@/types/tournamentPlayerType';

export default function TournamentPlayer({
  tournamentPlayer,
}: {
  tournamentPlayer: TournamentPlayer;
}) {
  return <div className="tournament-player">{tournamentPlayer.name}</div>;
}
