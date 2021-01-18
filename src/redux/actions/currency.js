import * as TYPES from '../types/currency'
//изменение количества исходной валюты
export const change_init_value = (newInitValue)=>({
  type: TYPES.CHANGE_INIT_VALUE,
  payload: newInitValue
})
//изменение количества конечной валюты
export const change_dest_value = (newDestValue)=>({
  type: TYPES.CHANGE_DEST_VALUE,
  payload: newDestValue
})
//изменение исходной валюты
export const change_init_curr = (newInitCurr)=>({
  type: TYPES.CHANGE_INIT_CURR,
  payload: newInitCurr
})
//изменение конечной валюты
export const change_dest_curr = (newDestCurr)=>({
  type: TYPES.CHANGE_DEST_CURR,
  payload: newDestCurr
})
//отправляем асинхронный запрос на сторонний сервер с целью получения курса и списка валют
export const get_rates_thunk = () => async (dispatch, getState) => {
  const {initCurr, destCurr} = getState()
  const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${initCurr}`)
  const rates = await response.json()
  //поскольку ответ приходит как объект в объекте, то мы будем диспачить и в качестве полезной нагрузки будем передавать массив, где есть сам курс между исходной и конечной валютой, а также список валют. В редьюсере мы деструктурируем этот массив.
  dispatch({type:TYPES.CHANGE_RATE,payload:[rates.rates[destCurr],Object.keys(rates.rates)]})
}
