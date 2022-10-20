
import React,{useEffect} from 'react';
import {setCustomText} from 'react-native-global-props';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store, { persistor } from "./redux/store";
import RootStack from './navigation/RootStack';
import { PersistGate } from 'redux-persist/integration/react';
const index = () => {
  const customTextProps = {
    style: {
      fontFamily: 'Rubik-Medium',
    },
  };

  useEffect(() => {
    return () => {
      setCustomText(customTextProps);
    };
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default index;
