import './App.css';
import { useMediaQuery } from 'react-responsive';
import Desktop from './components/desktop';
import Taskbar from './components/taskbar';
import MobileVersion from './components/mobileversion';

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 501px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' });
  return (
    <>
      {isBigScreen && (
        <div className="windowsarea">
          <Desktop />
          <Taskbar />
        </div>
      )}

      {isTabletOrMobile && <MobileVersion />}
    </>
  );
}

export default App;
