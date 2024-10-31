import React from 'react';
import styles from './Home.module.css';
import Globe from '../../components/shapes/Globe';
import Square from '../../components/shapes/Square';
import Cube from '../../components/shapes/Cube';

const Home: React.FC = () => {

    return (
        <div className={styles.background}>
            <div className={styles.box}>
                <div className={styles.topBox}>
                    <div className={styles.name}>Victor Frank</div>
                    <div className={styles.nameSub}>Master's degree ––––––– Software Engineering</div>
                </div>
                <div className={styles.bottomBox}>
                    <div className={styles.figureBox}>
                        <div className={styles.figureTextOne}>About</div>
                        <div className={styles.figure}>
                            <Cube />
                        </div>
                        <div className={styles.figureTextTwo}>Me</div>
                    </div>
                    <div className={styles.secondaryBox}>
                        <div className={styles.secondaryText}>More text here - More text here</div>
                        <div className={styles.secondaryText}>More text here - More text here</div>
                        <div className={styles.secondaryText}>More text here - More text here</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;