/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TextBlink from './components/TextBlink';
import TestCSS from './components/TestCSS';
import FixedDimension from './components/FixedDimension';
import FlexDimension from './components/FlexDimension';
import FlexExamle from './components/FlexExamle';
import JustifyContentExample from './components/JustifyContentExample';
import Login from './components/Login';
import TouchableExample from './components/TouchableExample';
import VerticalScrollView from './components/VerticalScrollView';
import HorizontalScrollView from './components/HorizontalScrollView';
import ViewPageExample from './components/ViewPageExample';
import BasicFlatList from './components/BasicFlatList';
// import AddPostStudy from './components/AddPostStudy';

AppRegistry.registerComponent(appName, () => BasicFlatList);
