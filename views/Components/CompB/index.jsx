import React from 'react'
import cx from 'classnames'
import { useStoreState } from 'easy-peasy'
import styles from './style.module.scss'

export default function CompB () {
  const state = useStoreState(state => state.common)
  return (
    <div className={cx('card', styles.container)}>
      <h3 className='title' >CompB</h3>
      <span>CompA's result is { state.num }</span>
    </div>
  )
}
