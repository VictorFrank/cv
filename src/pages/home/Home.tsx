import React from 'react';
import styles from './Home.module.css';
import SplineScene from '../../components/spline/SplineHomePage';

const Home: React.FC = () => {


    return (
        <div className={styles.splineContainer}>
            <SplineScene></SplineScene>
        </div>
    );
}

export default Home;