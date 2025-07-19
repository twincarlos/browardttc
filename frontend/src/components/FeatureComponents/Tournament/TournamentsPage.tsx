import TournamentGallery from './TournamentGallery';
import Main from '@/components/StyledComponents/Main/Main';
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
