/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import WelcomePage from './js/page/WelcomePage';
import AppNavigators from "./js/Navigator/AppNavigators";
import App from './js/App'

AppRegistry.registerComponent(appName, () => App);
