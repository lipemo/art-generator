import React, { useRef, useCallback, useState, useEffect } from 'react';
import logoDFT from './assets/logoDFT.png';
import FeatBF from './arts/featbf';
import { exportComponentAsJPEG } from 'react-component-export-image';
import './App.css';

const App: React.FC = () => {
  const ref:any = useRef();
  const [isSaving, setisSaving] = useState(false);

  const saveArt = useCallback(()=>{
    setisSaving(true);    
  },[isSaving]);

  useEffect(()=>{
    if(isSaving){
      exportComponentAsJPEG(ref, {
        fileName:"eu-dei-feat-com-a-dafiti"
      });
      setisSaving(false);
    }
  },[
    isSaving
  ]);
    return (
    <>
      <main>
        <FeatBF ref={ref} isSaving={isSaving}/>
      </main>
      <button type="button" onClick={() => saveArt()}>Salvar arte</button>
    </>
  );
}

export default App;
