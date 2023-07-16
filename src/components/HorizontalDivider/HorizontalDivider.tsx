import React from 'react';
import {StyleSheet, View} from "react-native";

const HorizontalDivider = () => <View style={styles.divider} />

const styles = StyleSheet.create({
  divider: {
    height: 1,
    alignSelf: 'stretch',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default HorizontalDivider;
