import './Tournament.css';
import formatDate from '@/utils/formatDate';
import type { Tournament } from '@/types/tournamentType';
import Card from '@/components/StyledComponents/Card/Card';
import Status from '@/components/StyledComponents/Status/Status';

export default function TournamentCard({ tournament }: { tournament: Tournament }) {
  return (
    <Card>
      <div className="tournament">
        <Status status={tournament.status} />
        <span className="tournament-name mt-1">{tournament.name}</span>
        {tournament.date && (
          <span className="tournament-date fs-sm">{formatDate(tournament.date)}</span>
        )}
      </div>
    </Card>
  );
}
