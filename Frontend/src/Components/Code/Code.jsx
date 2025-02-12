import { useContext, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import styles from '../Code/Code.module.scss'; 
import arrow from '../../assets/arrow.svg';
import axios from 'axios';
import { resultContext } from '../../hooks/useContext'; // Make sure to import your context

const Code = () => {
  // Properly access context values
  const { code, setCode, setResult } = useContext(resultContext);
  
  async function review() {
    try { 
      const response = await axios.post('http://localhost:3000/ai/get-response', { code:code });
      setResult(response.data); 
    } catch (error) {
      console.error('API error:', error);
      setResult('Error getting review'); 
    }
  }

  return (
    <div className={styles.code}>
      <Editor
        value={code}
        className={styles.codeBox}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.javascript, 'javascript')}
        padding={10}
        placeholder="Paste your code for a review"
      />
      <button onClick={review} type="submit" className={styles.btn}>
        <img src={arrow} alt="arrow" className={styles.icon} />
      </button>
    </div>
  );
};

export default Code;