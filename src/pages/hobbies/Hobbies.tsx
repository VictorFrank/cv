import React from 'react';
import styles from './Hobbies.module.css';
import { useNavigate } from 'react-router-dom';
import Spotify from "../../components/music/Spotify";


const Hobbies: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.background}>
            <div className={styles.frame}>
                <div className={styles.box}>
                    <Spotify />
                </div>
                <div className={styles.box}>
                    Video games box
                </div>
                <div className={styles.box}>
                    Something different box
                </div>
            </div>
        </div>
    );
}

export default Hobbies;