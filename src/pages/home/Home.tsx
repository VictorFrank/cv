import React from 'react';
import styles from './Home.module.css';
import Cube from '../../components/shapes/Cube';
import PythonLogo from '../../components/shapes/PythonLogo'

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
                        <div className={styles.figureTextOne}>Hobbies</div>
                        <div className={styles.figure}>
                            <Cube />
                        </div>
                        <div className={styles.figureTextTwo}>My</div>
                    </div>
                    <div className={styles.secondaryBox}>
                        <div className={styles.secondaryText}>EDUCATION</div>
                        <div className={styles.microBox}>
                            <div className={styles.microText}>
                                <div className={styles.tertiaryText}>Key skills</div>
                                <div className={styles.smallText}>Experience & Projects</div>
                                <div className={styles.smallTextLine1}></div>
                                <div className={styles.smallTextLine2}></div>
                                <div className={styles.smallTextLine3}></div>
                                <div className={styles.smallTextLine4}></div>
                            </div>
                            <div className={styles.microImage}>
                                <PythonLogo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;