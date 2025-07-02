import Card from '@/components/StyledComponents/Card/Card';
import Status from '@/components/StyledComponents/Status/Status';
import type { Tournament } from '@/types/tournamentType';
import formatDate from '@/utils/formatDate';
import './Tournament.css';

export default function Tournament({ tournament }: { tournament: Tournament }) {
  return (
    <Card>
      <div className="tournament f f-c">
        <Status status={tournament.status} />
        <span className="tournament-name mt-1">{tournament.name}</span>
        {tournament.date && (
          <span className="tournament-date fs-sm">{formatDate(tournament.date)}</span>
        )}
      </div>
    </Card>
  );
}
