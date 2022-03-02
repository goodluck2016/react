import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from 'axios';

export const FETCH_RECOMMEND_PRODUCTS_START = 
  "FETCH_RECOMMEND_PRODUCTS_START"; // 正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
"FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 推荐信息api调用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 
  "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 推荐信息api调用失败

interface FetchRecommendProductStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FetchRecommendProductSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  payload: any,
}

interface FetchRecommendProductFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
  payload: any
}

export type RecommendProductAction =
| FetchRecommendProductStartAction
| FetchRecommendProductSuccessAction
| FetchRecommendProductFailAction; 

export const fetchRecommendProductStartActionCreator = (): FetchRecommendProductStartAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START,
  };
};

export const fetchRecommendProductSuccessActionCreator = (data) : FetchRecommendProductSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data
  }
}

export const fetchRecommendProductFailActionCreator = (error):FetchRecommendProductFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error
  }
}

// thunk 可以返回一个函数，而不一定是 js 对象
// 在 thunk action 中可完成一些连续的 action 操作
// 可处理异步逻辑
// 业务逻辑可从 UI 层面挪到这里，代码分层更清晰
export const giveMeDataActionCreator = () : ThunkAction<
  void, 
  RootState, 
  unknown, 
  RecommendProductAction
> => async (dispatch, getState) => {
  dispatch(fetchRecommendProductStartActionCreator());
  try {
    const { data } = await axios.get('http://123.56.149.216:8080/api/productCollections');
    dispatch(fetchRecommendProductSuccessActionCreator(data));
  } catch (error) {
    dispatch(fetchRecommendProductFailActionCreator(error.message));
  }
};