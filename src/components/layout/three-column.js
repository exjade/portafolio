import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles/three-column.module.css'

function ThreeColumn({sidebar, content1, content2}) {
   return (
      <div className={`${styles['grid-container']}`} >
         {/* SIDEBAR */}
         <div className={`${styles.sidebar}`}>{sidebar}</div>

         {/*  ==============CONTENT ============== */}
         <main  className={`${styles['grid-content']}`}>
            <div className={`${styles['content-1']}`} >{content1}</div>

            <div className={`${styles['content-2']}`} >{content2}</div>
         </main>

      </div>
   )
}

export default ThreeColumn

ThreeColumn.propTypes = {
   sidebar: PropTypes.element, 
    content1: PropTypes.elementType,
     content2: PropTypes.elementType,
}