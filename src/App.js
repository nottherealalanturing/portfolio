import './App.css';
import Desktop from './components/desktop';
import Taskbar from './components/taskbar';

function App() {
  return (
    <div className="windowsarea">
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default App;
