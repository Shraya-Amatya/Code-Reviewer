import { useState } from 'react';
import Result from './Components/Result/Result'
import Code from './Components/Code/Code'
import { resultContext } from './hooks/useContext';

const App = () => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  return (
    <>
    <resultContext.Provider value={{ code, setCode, result, setResult }}>
     <main>
      <Code/>
      <Result/>
      </main> 
    </resultContext.Provider>
    </>
  )
}

export default App
