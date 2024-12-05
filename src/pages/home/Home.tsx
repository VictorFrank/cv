import React from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css';
import Cube from '../../components/shapes/Cube';
import {RotatingLine, RotatingTriangle} from "../../components/shapes/RotatingThing";
import PythonLogo from '../../components/shapes/PythonLogo'

const Home: React.FC = () => {
    const navigate = useNavigate()

    function navigateTo(path: string) {
        navigate(path)
    }

    return (
        <div className={styles.background}>
            <div className={styles.box}>
                <div className={styles.topBox}>
                    <div className={styles.name} onClick={() => navigateTo('/about')}>Victor Frank</div>
                    <div className={styles.nameSub}>Master's degree ––––––– Software Engineering</div>
                </div>
                <div className={styles.bottomBox}>
                    <div className={styles.figureBox}>
                        <div className={styles.figureTextOne}>Hobbies</div>
                        <div className={styles.figure} onClick={() => navigateTo('/hobbies')}>
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
                            </div>
                            <div className={styles.microImage}>
                                <PythonLogo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.helix}>
                <RotatingLine />
            </div>
            <div className={styles.triangles}>
                <RotatingTriangle />
            </div>
        </div>
    );
}

export default Home;