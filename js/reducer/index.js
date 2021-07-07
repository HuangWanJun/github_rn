import {combineReducers} from "redux";
import theme from './theme'
import countIndex from './theme/countIndex'

/**
 * 1,create combine Reudcer
 *
 * @type {Reducer<CombinedState<{theme: EmptyObject & StateFromReducersMapObject<*>}>>}
 */
const index = combineReducers({
  theme:theme,
  countIndex:countIndex,
});
export  default index;
