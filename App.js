import { Navigation } from 'react-native-navigation';
import Login from './src/screens/Auth/Login';

export default () => {
  Navigation.registerComponent('navigation.playground.WelcomeScreen', () => Login);

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'navigation.playground.WelcomeScreen'
        }
      }
    });
  });
};
