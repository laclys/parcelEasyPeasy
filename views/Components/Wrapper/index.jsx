import React from 'react'
import styles from './style.module.scss'

export default function Wrapper (props) {
  return (
    <div className={styles.container}>
      { props.children }
    </div>
  )
}