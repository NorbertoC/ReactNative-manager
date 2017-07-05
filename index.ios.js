import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './src/App'

const SimpleApp = StackNavigator({
  Home: { screen: App },
});

AppRegistry.registerComponent('manager', () => SimpleApp);