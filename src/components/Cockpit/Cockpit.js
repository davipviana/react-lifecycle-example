import React from 'react';

import styles from './Cockpit.module.css';

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    let message = 'It\'s working';

    if (props.showPersons) {
        btnClass = styles.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(styles.red);
        message = 'Enough persons';
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(styles.bold);
        message = 'Sadly we have just few persons';
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>{message}</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;