import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  table: false,
  m: 0,
  n: 0
}

export const showingTable = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_TABLE:
      return {
        table: true,
        m: action.m,
        n: action.n
      }
    case ACTION_TYPES.HIDE_TABLE:
      return {
        table: false,
        m: 0,
        n: 0
      }
    default:
      throw new Error()
  }
}

