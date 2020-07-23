import { FETCH_NEWS, UPDATE_PAGE_NUM } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_NEWS:
      return [action.payload, ...state];
    case UPDATE_PAGE_NUM:
      return [action.payload, ...state];
    default:
    // do nothing
  }
  return state;
}
