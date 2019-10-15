import { Observable } from 'rxjs/Observable'
import { ajax as staticAjax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'
import { apiCall, apiCallFetch } from '../../utils'
import { data } from '../../utils/data'
export const ERROR = 'ERROR'

const PRODUCTS = 'PRODUCTS'
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS'
const PRODUCTS_FAILURE = 'PRODUCTS_FAILURE'

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  flag:false
}

export const fetchProductAction = payload => ({
  type: PRODUCTS,
  payload
})

const productsSuccess = payload => ({
  type: PRODUCTS_SUCCESS,
  payload
})

export const productEpic = action$ => action$
  .ofType(PRODUCTS)
  .mergeMap(action => staticAjax(apiCallFetch(`https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json`, 'GET'))
    .map(response => productsSuccess(response))
    .catch(error => Observable.of({
      type: PRODUCTS_FAILURE,
      payload: error
    }, {
        type: ERROR,
        payload: error
      })))

export function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PRODUCTS: {
      // console.log('PRODUCTS', action);
      return {
        ...state,
        data: data,
        loading: true,
        error: false,
        flag:false
      }
    }
    case PRODUCTS_SUCCESS: {
      console.log('PRODUCTS_SUCCESS', action);
      return {
        ...state,
        data: data,
        loading: false,
        error: false,
        flag:true
      }
    }
    case PRODUCTS_FAILURE: {
      // console.log('PRODUCTS_FAILURE', action);
      return {
        ...state,
        data: data,
        loading: false,
        error: false,
        flag: false
      }
    }
    default:
      return state
  }
}

