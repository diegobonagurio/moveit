import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
  const {level} = useContext(ChallengesContext)
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/diegobonagurio.png" alt="Diego Bonagurio"/>
      <div>
        <strong>Diego Bonagurio</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}