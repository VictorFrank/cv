import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';
import SplineScene from '../../components/spline/SplineHomePage';

const Home: React.FC = () => {
    const navigate = useNavigate()
    const [showButtons, setShowButtons] = useState(false)

    const handleButtonClick = () => {
        setShowButtons(!showButtons)
    }

    return (
        <div className={styles.background}>
            <div className={styles.splineContainer}>
                <button className={styles.invisibleButton} onClick={handleButtonClick}></button>
                {showButtons && (
                    <div className={styles.navigationButtons}>
                        <button onClick={() => console.log('Button 1 clicked')}>Button 1</button>
                        <button onClick={() => console.log('Button 2 clicked')}>Button 2</button>
                        <button onClick={() => console.log('Button 3 clicked')}>Button 3</button>
                    </div>
                )}
                <SplineScene></SplineScene>
            </div>
        </div>
    );
}

export default Home;