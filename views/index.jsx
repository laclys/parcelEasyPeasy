import React from 'react'
import { StoreProvider, createStore } from 'easy-peasy'
import model from './store/model'

import '@babel/polyfill' // async、await不使用这个会报错

import Wrapper from './Components/Wrapper'
import CompA from './Components/CompA'
import CompB from './Components/CompB'
import CompC from './Components/CompC'

const store = createStore(model)

export default function App () {
  return (
    <StoreProvider store={store}>
      <Wrapper>
        <CompA />
        <CompB />
        <CompC />
      </Wrapper>
    </StoreProvider>
  )
}