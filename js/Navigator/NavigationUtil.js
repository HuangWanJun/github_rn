
export default class NavigationUtil{
  /**
   * jump to appoint page
   * @param params
   * @param page
   */
  static goPage(params,page){
    const navigation = NavigationUtil.navigation;
    if(!navigation){
      console.log("navigation cannot be null");
    }else{
      navigation.navigate(page,{...params});
    }
  }

   static resetToHomePage(params){
    const {navigation}  = params;
     navigation.navigate('HomePage');
  };
}
