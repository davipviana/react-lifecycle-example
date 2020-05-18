import React from 'react';
import logo from '../../assets/img/logo.svg';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.App}>
            <header>
                <img src={logo} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

export default App;
