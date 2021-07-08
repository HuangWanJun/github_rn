import  Types from '../types'
import CountType from '../countType'

export function onThemeChange(theme){
  return {type:Types.THEME_CHANGE,theme:theme};
}

export function  onCountChange(num){
  return {type:CountType.ADD,count:num};
}
