import React from 'react'
import styles from './Buttton.module.css'

const Buttton = ({type, children, onClick}) => {
  return (
    <button className={styles.Btn} type='button' onClick={onClick}>
        {children}
    </button>
  )
}

export default Buttton