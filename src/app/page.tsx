import { Page as HomePage } from './pages/home/page';
import PcHeader from './partialComponents/header/pcHeader';
import MobileHeader from './partialComponents/header/mobileHeader';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <PcHeader />
      <MobileHeader />
      <HomePage />
    </>
  );
}

export default Home;