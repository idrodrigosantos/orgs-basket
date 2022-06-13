import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import CustomText from '../../../components/CustomText';
import top from '../../../../assets/top.png';

const width = Dimensions.get('screen').width;

export default function Top({ title }) {
  return (
    <>
      <Image source={top} style={styles.top} />
      <CustomText style={styles.title}>{title}</CustomText>
    </>
  );
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: (578 / 768) * width,
    fontFamily: 'Montserrat',
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
});
