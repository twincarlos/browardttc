import Card from '@/components/StyledComponents/Card/Card';
import type { Tournament } from '@/types/tournamentType';
import './Tournament.css';

export default function Tournament({ tournament }: { tournament: Tournament }) {
  return (
    <Card>
        <div className="tournament">{tournament.name}</div>
    </Card>
);
}
