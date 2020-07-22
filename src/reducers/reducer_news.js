import { FETCH_NEWS } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_NEWS:
      const ret = [action.payload.data, ...state];
      return ret;
  }
  return state;
}
