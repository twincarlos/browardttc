'use client';
import Main from '@/components/StyledComponents/Main/Main';
import Header from '@/components/StyledComponents/Header/Header';
import { useGetTournamentsQuery } from '@/store/apis/tournamentApi';
import TournamentGallery from '@/components/FeatureComponents/TournamentGallery/TournamentGallery';

export default function Home() {
  const { isLoading, error } = useGetTournamentsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  
  return (
    <>
      <Header title={"Broward TTC | Tournaments"} />
      <Main>
        <TournamentGallery />
      </Main>
    </>
  );
}
