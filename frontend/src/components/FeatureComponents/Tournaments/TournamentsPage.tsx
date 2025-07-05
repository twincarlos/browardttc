import Main from '@/components/StyledComponents/Main/Main';
import TournamentGallery from '../Tournament/TournamentGallery';
import TournamentsPageHeader from './TournamentsPageHeader';

export default function TournamentsPage() {
  return (
    <>
      <TournamentsPageHeader />
      <Main>
        <TournamentGallery />
      </Main>
    </>
  );
}
