/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  LoginPage from './src/component/pages/login';
import SignUpPage from './src/component/pages/signup';
import {
  NativeBaseProvider,
} from 'native-base';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducer';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const store = createStore(reducers);
  return (
    <Provider store={store}>
    <NativeBaseProvider>
      <NavigationContainer>
          <Stack.Navigator>        
            <Stack.Screen          
              name="Login"          
              component={LoginPage}          
              options={{ title: 'Welcome' }}        
              />        
            <Stack.Screen          
              name="SignUp"          
              component={SignUpPage}          
              options={{ title: 'Welcome' }}        
              />        
            </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
