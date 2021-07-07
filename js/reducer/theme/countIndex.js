
import CountType from '../../action/countType'
const defaultState={
  count:3,
}
/**
 * 2. create State
 * @param state
 * @returns {{theme: string}}
 */


export default function onAction(state=defaultState,action){
  switch (action.type){
    case CountType.ADD:
      return{
        ...state,
        theme:action.count
      }
    default:
      return state;
  }
}
