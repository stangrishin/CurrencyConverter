import * as TYPES from '../types/currency';

function currencyReducer(state = {}, action) {
  switch (action.type) {
    case TYPES.CHANGE_INIT_VALUE:
      return {
        ...state,
        initValue: action.payload,
        destValue: action.payload * state.rate,
      };
    case TYPES.CHANGE_DEST_VALUE:
      return {
        ...state,
        destValue: action.payload,
        initValue: action.payload / state.rate,
      };
    case TYPES.CHANGE_INIT_CURR:
      return {
        ...state,
        initCurr: action.payload,
      };
    case TYPES.CHANGE_DEST_CURR:
      return {
        ...state,
        destCurr: action.payload,
      };
      case TYPES.CHANGE_RATE:
      return {
        ...state,
        rate: action.payload,
        destValue:state.initValue*action.payload
      };

    default:
      return state;
  }
}

export default currencyReducer;
