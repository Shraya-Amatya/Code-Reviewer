import { useContext } from 'react';
import { resultContext } from '../../hooks/useContext';
import styles from '../Result/Result.module.scss';
import Markdown from 'react-markdown';

const Result = () => {
  const { result } = useContext(resultContext);

  return (
    <div className={styles.resultContainer}>
      <div className={styles.messageList}>
        <div className={styles.message}>
          <Markdown className={styles.messageContent}>
            {result}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default Result;
