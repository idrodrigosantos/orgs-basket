import React, { PropsWithChildren } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { CustomText } from '@/components/CustomText';

export const Item = ({ item: { name, image } }: PropsWithChildren<any>) => {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <CustomText style={styles.name}>{name}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  },
});
