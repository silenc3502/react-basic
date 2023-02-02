import { createAction, handleActions } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { fetchItemApi, fetchItemListApi } from "../lib/api";
import {
  startLoading,
  endLoading,
} from "./loading";

const FETCH_SUCCESS = "item/FETCH_SUCCESS";
const FETCH_FAILURE = "item/FETCH_FAILURE";

const FETCH_LIST_SUCCESS = "item/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "item/FETCH_LIST_FAILURE";

export const FETCH_ITEM = "item/FETCH_ITEM";
export const FETCH_ITEM_LIST = "item/FETCH_ITEM_LIST";

export const fetchSuccess = createAction(FETCH_SUCCESS, (data) => data);
export const fetchFailure = createAction(FETCH_FAILURE, (e) => e);

export const fetchListSuccess = createAction(FETCH_LIST_SUCCESS, (data) => data);
export const fetchListFailure = createAction(FETCH_LIST_FAILURE, (e) => e);

export const fetchItem = createAction(FETCH_ITEM, (itemId) => itemId);
export const fetchItemList = createAction(FETCH_ITEM_LIST);

function* fetchItemSaga(action) {
  yield put(startLoading(FETCH_ITEM));
  try {
    const response = yield call(fetchItemApi, action.payload);
    yield put(fetchSuccess(response.data));
  } catch (e) {
    yield put(fetchFailure(e));
  }
  yield put(endLoading(FETCH_ITEM));
}

function* fetchItemListSaga() {
  yield put(startLoading(FETCH_ITEM_LIST));
  try {
    const response = yield call(fetchItemListApi);
    yield put(fetchListSuccess(response.data));
  } catch (e) {
    yield put(fetchListFailure(e));
  }
  yield put(endLoading(FETCH_ITEM_LIST));
}

export function* itemSaga() {
  yield takeLatest(FETCH_ITEM, fetchItemSaga);
  yield takeLatest(FETCH_ITEM_LIST, fetchItemListSaga);
}

const initialState = {
  item: null,
  items: [],
  error: null,
};

const item = handleActions(
  {
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      item: action.payload,
    }),
    [FETCH_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      items: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default item;
