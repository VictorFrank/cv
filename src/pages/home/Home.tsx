import React from 'react';
import styles from './Home.module.css';
import Globe from '../../components/shapes/Globe';

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
                        <div className={styles.figure}>
                            <Globe></Globe>
                        </div>
                        <div className={styles.figureText}> Circle here? </div>
                    </div>
                    <div className={styles.secondaryBox}>
                        <div className={styles.secondaryText}> More text here</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;