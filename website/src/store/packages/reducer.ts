import { PackagesStore } from '../../types/packages';
import { Reducer } from 'redux';

const initialState: PackagesStore = {
  loading: false,
  errors: undefined,
  list: {}
};

const reducer: Reducer<PackagesStore> = (state = initialState, action) => {
  switch (action.type) {
    case '@@packages/PACKAGE_LIST_POPULATED': {
      return { ...state, list: action.payload };
    }
    case '@@packages/PACKAGE_LIST_ERROR': {
      return { ...state, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
