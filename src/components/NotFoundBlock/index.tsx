import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing is found
      </h1>
      <p className={styles.description}>
        Unfortunately, this page does not exist on Ultrasonic Car Wash website
      </p>
    </div>
  );
};
