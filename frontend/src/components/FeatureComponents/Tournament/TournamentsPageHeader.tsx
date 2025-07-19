import Header from '@/components/StyledComponents/Header/Header';
import TournamentsMenu from '@/components/Menus/TournamentsMenu';

export default function TournamentsPageHeader() {
  return <Header title={'Broward TTC | Tournaments'} menu={<TournamentsMenu />} />;
}
