import React from 'react'
import { StoreProvider, createStore } from 'easy-peasy'
import model from './store/model'

import CompA from './CompA'

const store = createStore(model)

export default function App () {
  return (
    <StoreProvider store={store}>
      <CompA />
    </StoreProvider>
  )
}