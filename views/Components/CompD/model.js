import { action } from "easy-peasy"

const ADD = 'ADD'
const MINUS = 'MINUS'

// actions
export const add = (num) => {
  return {
    type: ADD,
    num
  }
}

export const minus = (num) => {
  return {
    type: MINUS,
    num
  }
}

export const INIT_STATE = {
  count: 0
}

// reducer
export const countReducer = (state, action) => {
  switch (action.type) {
    case ADD:
    {
      const _state = { ...state }
      _state.count = _state.count + action.num
      return _state
    }

    case MINUS:
    {
      const _state = { ...state }
      _state.count = _state.count - action.num
      return _state
    }

    default: 
      return state
  }
}

