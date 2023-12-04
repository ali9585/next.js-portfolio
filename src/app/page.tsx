'use client';

import Page from './presentationLayer/pages/home/page';
import { store } from './presentationLayer/redux/store/store';
import { Provider } from 'react-redux';

const Home: React.FC = (): JSX.Element => {

  return (
    <>
      <Provider store={store}>
        {/* <div className='app-bg-video'>
        <video className="body-overlay" muted={true} autoPlay={true} loop={true}>
          <source src='/src/app/presentationLayer/assets/videos/bg-video.mp4' type="video/mp4" />
        </video>
      </div> */}
        <div className='app-bg'></div>
        <Page />
      </Provider>
    </>
  );
}

export default Home;