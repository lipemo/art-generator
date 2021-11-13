import { useRef } from 'react';
import logoDFT from './assets/logoDFT.png';
import FeatBF from './arts/featbf';
import { exportComponentAsJPEG } from 'react-component-export-image';
import './App.css';

const App: React.FC = () => {
  const ref:any = useRef();

  return (
    <div className="App">
      
      <FeatBF ref={ref} />
      <button onClick={() => exportComponentAsJPEG(ref)}>
        Export As JPEG
      </button>
    </div>
  );
}

export default App;
