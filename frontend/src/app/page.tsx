import Main from '@/components/StyledComponents/Main/Main';
import Header from '@/components/StyledComponents/Header/Header';
import TournamentGallery from '@/components/FeatureComponents/Tournament/TournamentGallery';

export default function Home() {
  
  return (
    <>
      <Header title={"Broward TTC | Tournaments"} />
      <Main>
        <TournamentGallery />
      </Main>
    </>
  );
}
