import React from 'react'
import { StoreProvider, createStore } from 'easy-peasy'
import model from './store/model'

import Wrapper from './Components/Wrapper'
import CompA from './Components/CompA'
import CompB from './Components/CompB'

const store = createStore(model)

export default function App () {
  return (
    <StoreProvider store={store}>
      <Wrapper>
        <CompA />
        <CompB />
      </Wrapper>
    </StoreProvider>
  )
}