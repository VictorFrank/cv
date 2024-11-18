import React from 'react';
import styles from './Hobbies.module.css';
import { useNavigate } from 'react-router-dom';


const Hobbies: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.background}>
            <div className={styles.frame}>
                <div className={styles.box}>
                    Music box
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