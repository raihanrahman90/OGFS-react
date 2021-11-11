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
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Text, View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  LoginPage from './src/component/pages/login';
import SignUpPage from './src/component/pages/signup';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducer';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
const App = () => {
  const Stack = createNativeStackNavigator();
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen          
                name="Login"          
                component={LoginPage}
                options={{
                  headerShown:false
                }}               
                />        
              <Stack.Screen          
                name="SignUp"          
                component={SignUpPage}         
                options={{
                  headerShown:false
                }}                 
                />        
              </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
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
  fontsans:{
    fontFamily: "opensans-regular"
  }
});

export default App;
