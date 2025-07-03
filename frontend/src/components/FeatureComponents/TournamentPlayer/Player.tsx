'use client';
import './Player.css';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectTournamentPlayerById } from '@/store/slices/tournamentPlayerSlice';

export default function TournamentPlayer({
  tournamentPlayerId,
}: {
  tournamentPlayerId: number;
}) {
  const tournamentPlayer = useAppSelector((state) =>
    selectTournamentPlayerById(state, tournamentPlayerId),
  );
  return <div className="player">{tournamentPlayer.name}</div>;
}