import { Page as HomePage } from './pages/home/page';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <div className='app-bg'></div>
      <HomePage />
    </>
  );
}

export default Home;