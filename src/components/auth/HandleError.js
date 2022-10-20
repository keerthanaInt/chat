import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { VERY_SMALL_VERTICAL_SPACE } from '../../utils/data';

const HandleError = ({errors}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
      <Text style={styles.errorText}>
        {errors?.phone ? errors.phone : errors.password}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({

  errorText: {
    color: "red",
    alignSelf: "center",
    textAlign: "center",
  },
});
export default HandleError