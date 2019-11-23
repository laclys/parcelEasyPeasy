import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

export default function CompA() {
  const state = useStoreState(state => state)
  const actionAdd = useStoreActions(actions => actions.add)
  const actionMinus = useStoreActions(actions => actions.minus)
  return (<div>
    Number: <span>{ state.num }</span>
    <div>
      <button onClick={() => actionAdd()} >+</button>
      <button onClick={() => actionMinus()}>-</button>
    </div>
  </div>)
}