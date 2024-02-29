import React from 'react';
import styles from './styles/block-code.module.css'

function BlockCode() {
    return (
        <div className={`${styles['block_code-container']}`} >

            {/* Edge */}
            <img
                src="/assets/code/code-snippet-2.png"
                alt="code snippet"
                className={styles['block_code-image-edges']}
            />
            {/* Center */}
            <img
                src="/assets/code/code-snippet-1.jpg"
                alt="code snippet"
                className={styles['block_code-image-center']}
            />
            {/* Edge */}
            <img
                src="/assets/code/code-snippet-2.png"
                alt="code snippet"
                className={styles['block_code-image-edges']}
            />

        </div>
    )
}

export default BlockCode