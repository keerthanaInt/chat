import {StyleSheet, View,} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/data';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FormContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <KeyboardAwareScrollView
          bounces={false}
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}>
          {children}
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: hp("64%"),
    backgroundColor: "red",
    borderTopEndRadius: height * 0.04,
    borderTopStartRadius: height * 0.04,
    paddingTop: 2,
  },
  childContainer: {
    width: width,
    height: hp("64%"),
    backgroundColor: "#fff",
    borderTopEndRadius: height * 0.04,
    borderTopStartRadius: height * 0.04,
    paddingHorizontal: 16,
  },
});
export default FormContainer;
