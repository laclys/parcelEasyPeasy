import { action, thunk } from 'easy-peasy'
import { transformWords } from '../../api'

export default {
  ret: null,
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload
  }),
  transformed: action((state, payload) => {
    state.ret = payload
  }),
  transforming: thunk(async (action, payload) => {
    action.setLoading(true)
    let result = await transformWords(payload)
    action.setLoading(false)
    action.transformed(result.rcontent)
  })
}