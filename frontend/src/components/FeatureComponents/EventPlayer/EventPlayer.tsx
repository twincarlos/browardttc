'use client';
import type { EventPlayer } from '@/types/eventPlayerType';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectTournamentPlayerById } from '@/store/slices/tournamentPlayerSlice';
import TournamentPlayer from '../TournamentPlayer/TournamentPlayer';

export default function EventPlayer({
  eventPlayer,
}: {
  eventPlayer: EventPlayer;
}) {
  const tournamentPlayer = useAppSelector((state) =>
    selectTournamentPlayerById(state, eventPlayer.tournament_player_id),
  );

  return (
    <div className="event-player">
      <TournamentPlayer tournamentPlayer={tournamentPlayer} />
    </div>
  );
}
