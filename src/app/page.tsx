import { Page as HomePage } from './pages/home/page';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <div className='app-bg-video'>
        <video className="body-overlay" muted={true} autoPlay={true} loop={true}>
          <source src='/assets/videos/bg-video.mp4' type="video/mp4" />
        </video>
      </div>
      <div className='app-bg transparent'></div>
      <HomePage />
    </>
  );
}

export default Home;