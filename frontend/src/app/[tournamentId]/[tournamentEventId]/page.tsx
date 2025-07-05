'use client';
import { useParams } from 'next/navigation';
import TournamentEventPage from '@/components/FeatureComponents/TournamentEvent/TournamentEventPage';

export default function TournamentEventPageWrapper() {
  const { tournamentId, tournamentEventId } = useParams<{
    tournamentId: string;
    tournamentEventId: string;
  }>();

  return (
    <TournamentEventPage
      tournamentId={tournamentId}
      tournamentEventId={tournamentEventId}
    />
  );
}
