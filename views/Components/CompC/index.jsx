import React, { useState } from 'react'
import cx from 'classnames'
import { useStoreState, useStoreActions } from 'easy-peasy'
import styles from './style.module.scss'

export default function CompC () {
  const [text, setText] = useState('')
  const state = useStoreState(state => state.trans)
  const actionTrans = useStoreActions(actions => actions.trans.transforming)
  const handleTextChange = e => setText(e.target.value)
  const handleTransClick = async () => {
    await actionTrans(text)
    setText('')
  }
  return (
    <div className={cx('card', styles.container)}>
      <h3 className='title' >CompC</h3>
      <div className={styles.inputWrapper} >
        <input type='text' onChange={handleTextChange} />
        <button onClick={handleTransClick}>Transform</button>
      </div>
      {state.loading ? <div>loading~</div>
        : (state.ret ? <div>Transformed: { state.ret }</div> : null)}
    </div>
  )
}
