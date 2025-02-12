import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import styles from '../Code/Code.module.scss'; 
import arrow from '../../assets/arrow.svg';  // Import your SVG

const Code = () => {
  const [code, setCode] = useState('');

  return (
    <div className={styles.code}>
      <Editor
        value={code}
        className={styles.codeBox}  // Use styles for proper positioning
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.javascript, 'javascript')}
        padding={10}
        placeholder="Paste your code for a review"
      />
      <button type="submit" className={styles.btn}>
        <img src={arrow} alt="arrow" className={styles.icon} />
      </button>
    </div>
  );
};

export default Code;
