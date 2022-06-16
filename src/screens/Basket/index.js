import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Top from './components/Top';
import Details from './components/Details';
import Item from './components/Item';
import CustomText from '../../components/CustomText';

export default function Basket({ top, details, items }) {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Top {...top} />
              <View style={styles.basket}>
                <Details {...details} />
                <CustomText style={styles.title}>{items.title}</CustomText>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
