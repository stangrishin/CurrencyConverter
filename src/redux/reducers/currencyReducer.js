import * as TYPES from '../types/currency';

function currencyReducer(state = {}, action) {
  switch (action.type) {
    case TYPES.CHANGE_INIT_VALUE:
      return {
        ...state,
        initValue: action.payload,
      };
    case TYPES.CHANGE_DEST_VALUE:
      return {
        ...state,
        destValue: action.payload,
      };

    default:
      return state;
  }
}

export default currencyReducer;
