import { combineEpics } from 'redux-observable'
import { productEpic } from './Dashboard/logic'

const rootEpic = combineEpics(
  productEpic
)

export default rootEpic
