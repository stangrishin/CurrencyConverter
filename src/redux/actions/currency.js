import * as TYPES from '../types/currency'

export const change_init_value = (newInitValue)=>({
  type: TYPES.CHANGE_INIT_VALUE,
  payload: newInitValue
})

export const change_dest_value = (newDestValue)=>({
  type: TYPES.CHANGE_DEST_VALUE,
  payload: newDestValue
})
