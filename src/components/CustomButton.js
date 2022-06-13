import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from './CustomText';

export default function CustomButton({ children, style, onPress }) {
  return (
    <>
      <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
        <CustomText style={styles.buttonText}>{children}</CustomText>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
