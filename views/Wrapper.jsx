import { action } from

export default {
  num: 0,
  add: action((state) => {
    state.num + 1
  })
}