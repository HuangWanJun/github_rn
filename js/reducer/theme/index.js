import Types from '../../action/types'
const defaultState={
  theme:'blue',
}
/**
 * 2. create State
 * @param state
 * @returns {{theme: string}}
 */
export default function onAction(state=defaultState,action){
  switch (action.type){
    case Types.THEME_CHANGE:
      return{
        ...state,
        theme:action.theme
      }
    default:
      return state;
  }
}
