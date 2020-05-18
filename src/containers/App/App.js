import React from 'react';
import styles from './App.module.css';

function App(props) {
    return (
        <div className={styles.App}>
            <h1>{props.title}</h1>
        </div>
    );
}

export default App;
