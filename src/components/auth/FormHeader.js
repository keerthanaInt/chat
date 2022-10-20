import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { BIT_SMALL_VERTICAL_SPACE, REGULAR, SMALL, VERY_SMALL_VERTICAL_SPACE } from '../../utils/data';

const FormHeader = ({line1,line2,line3}) => {
  return (
    <View style={{ marginTop: BIT_SMALL_VERTICAL_SPACE }}>
      <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
      <Text style={styles.title}>{line1}</Text>
      <Text style={styles.title}>{line2}</Text>
      <Text style={styles.Info}>{line3}</Text>
      <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: REGULAR,
    color: "black",
  },
  Info: {
    fontSize: SMALL,
    color: "gray",
  },
});
export default FormHeader