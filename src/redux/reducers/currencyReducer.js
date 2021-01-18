import * as TYPES from '../types/currency';

function currencyReducer(state = {}, action) {
  switch (action.type) {
    //изменение количества исх валюты
    case TYPES.CHANGE_INIT_VALUE:
      return {
        ...state,
        initValue: action.payload,
        destValue: action.payload * state.rate, //кол-во конечной валюты сразу должно пересчитываться
      };
    //изменение количества кон валюты
    case TYPES.CHANGE_DEST_VALUE:
      return {
        ...state,
        destValue: action.payload,
        initValue: action.payload / state.rate, //кол-во исх валюты должно сразу пересчитываться
      };
    //изменение исх валюты на другую
    case TYPES.CHANGE_INIT_CURR:
      return {
        ...state,
        initCurr: action.payload,
      };
    //изменение конечной валюты на другую
    case TYPES.CHANGE_DEST_CURR:
      return {
        ...state,
        destCurr: action.payload,
      };
    //изменение курса - происходит когда либо меняются местами валюты, либо меняется одна из валют
    case TYPES.CHANGE_RATE:
      const [newRate, allCurrencies] = action.payload;//достаем курс и список валют
      return {
        ...state,
        rate: newRate,
        destValue: state.initValue * newRate,//нам нужно пересчитать только конечное количество, потому что исх количество не меняется (так задумано)
        allTheCurrencies: allCurrencies,//поскольку для некоторых валют может не быть кросс-курсов, то надо каждый раз получать и сохранять в стор возможные валюты
      };

    default:
      return state;
  }
}

export default currencyReducer;
