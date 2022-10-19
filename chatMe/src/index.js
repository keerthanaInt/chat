
import React from 'react';
import {setCustomText} from 'react-native-global-props';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './redux/store';
import RootStack from './navigation/RootStack';

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
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default index;
