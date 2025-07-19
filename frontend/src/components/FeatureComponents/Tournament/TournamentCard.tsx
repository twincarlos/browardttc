import './Tournament.css';
import { longDate } from '@/utils/formatDate';
import type { Tournament } from '@/types/tournamentType';
import Status from '@/components/StyledComponents/Status/Status';

export default function TournamentCard({
  tournament,
}: {
  tournament: Tournament;
}) {
  return (
    <div className="tournament bra p-1 f fd-c">
      <Status status={tournament.status} />
      <span className="tournament-name mt-1">{tournament.name}</span>
      <span className="tournament-date fs-sm">{longDate(tournament.date)}</span>
    </div>
  );
}
