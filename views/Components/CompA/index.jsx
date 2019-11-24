import React from 'react'
import cx from 'classnames'
import styles from './style.module.scss'
import { useStoreState, useStoreActions } from 'easy-peasy'

export default function CompA() {
  const state = useStoreState(state => state.common)
  const actionAdd = useStoreActions(actions => actions.common.add)
  const actionMinus = useStoreActions(actions => actions.common.minus)
  return (<div className={cx(styles.container, 'card')}>
    <h3 className='title' >CompA</h3>
    Number: <span>{ state.num }</span>
    <div>
      <button className={styles.first} onClick={() => actionAdd()} >+</button>
      <button onClick={() => actionMinus()}>-</button>
    </div>
  </div>)
}