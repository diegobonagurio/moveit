import styles from '../styles/components/Profile.module.css';

export function Profile () {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/diegobonagurio.png" alt="Diego Bonagurio"/>
      <div>
        <strong>Diego Bonagurio</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}