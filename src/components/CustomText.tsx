import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface CustomTextProps {
  children: any;
  style: any;
}

export const CustomText = ({ children, style }: CustomTextProps) => {
  let customStyle = styles.text;

  if (style?.fontWeight === 'bold') {
    customStyle = styles.boldText;
  }

  return <Text style={[style, customStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  boldText: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  },
});
