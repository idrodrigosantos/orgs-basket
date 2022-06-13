import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from '../../../components/CustomText';
import logo from '../../../../assets/logo.png';

export default function Details() {
  return (
    <>
      <CustomText style={styles.name}>Cesta de Verduras</CustomText>
      <View style={styles.farm}>
        <Image source={logo} style={styles.farmImage} />
        <CustomText style={styles.farmName}>Jenny Jack Farm</CustomText>
      </View>
      <CustomText style={styles.description}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto
        para sua cozinha
      </CustomText>
      <CustomText style={styles.price}>R$ 40,00</CustomText>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
