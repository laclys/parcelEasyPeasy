import { action, thunk } from 'easy-peasy'

export default {
  num: 0,
  add: action (state => {
    state.num  = state.num + 1
  }),
  minus: action (state => {
    state.num = state.num - 1
  })
}
