import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/layout.module.css'

export default function Container({children}) {
    return (
        <main className={`${styles.container} `} >
            {children}
        </main>
    )
}

Container.propTypes = {
    children: PropTypes.node,
}