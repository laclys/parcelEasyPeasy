import React, { useReducer, useState } from 'react'
import cx from 'classnames'
import styles from './style.module.scss'
import { countReducer, INIT_STATE, add, minus } from './model'

export default function CompD() {
  const [countState, dispatch] = useReducer(countReducer, INIT_STATE)
  const [disabled, setDisabled] = useState(false)
  const delayAdd = (num, delay) => {
    if (disabled) return
    setDisabled(true)
    setTimeout(() => {
      dispatch(add(num))
      setDisabled(false)
    }, delay * 1000)
  }

  return (<div className={cx(styles.container, 'card')}>
    <h3 className='title' >CompD</h3>
    <div className={styles.conWrapper} >
      <div className={styles.count} >{ countState.count }</div>
      <div className={styles.btnWrapper} >
        <button onClick={() => dispatch(add(1))}  >加一</button>
        <button onClick={() => dispatch(minus(1))}>减一</button>
        <button onClick={() => dispatch(add(5))}>加五</button>
        <button className={disabled ? styles.btnDisable : ''}
          onClick={() => delayAdd(1, 3)} >延迟3秒加一</button>
      </div>
    </div>
  </div>)
}