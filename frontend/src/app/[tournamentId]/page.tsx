'use client';
import { useParams } from 'next/navigation';
import TournamentPage from '@/components/FeatureComponents/Tournament/TournamentPage';

export default function TournamentPageWrapper() {
  const { tournamentId } = useParams<{ tournamentId: string }>();
  return <TournamentPage tournamentId={tournamentId} />;
}
