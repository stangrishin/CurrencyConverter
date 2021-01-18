import * as TYPES from '../types/currency'

export const change_init_value = (newInitValue)=>({
  type: TYPES.CHANGE_INIT_VALUE,
  payload: newInitValue
})

export const change_dest_value = (newDestValue)=>({
  type: TYPES.CHANGE_DEST_VALUE,
  payload: newDestValue
})

export const change_init_curr = (newInitCurr)=>({
  type: TYPES.CHANGE_INIT_CURR,
  payload: newInitCurr
})

export const change_dest_curr = (newDestCurr)=>({
  type: TYPES.CHANGE_DEST_CURR,
  payload: newDestCurr
})

export const get_rates_thunk = () => async (dispatch, getState) => {
  const {initCurr, destCurr} = getState()
  const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${initCurr}`)
  const rates = await response.json()
  dispatch({type:TYPES.CHANGE_RATE,payload:[rates.rates[destCurr],Object.keys(rates.rates)]})
}
