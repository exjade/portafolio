import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/layout.module.css'

export default function ContainerMiddle({children}) {
    return (
        <div className={`${styles['container-middle']} `} >
            {children}
        </div>
    )
}

ContainerMiddle.propTypes = {
    children: PropTypes.node,
}