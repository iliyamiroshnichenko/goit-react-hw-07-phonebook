import Spinner from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <Spinner
      className={styles.spinner}
      type="Oval"
      color="#000"
      height={40}
      width={40}
    />
  );
};

export default Loader;
