import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Top } from '@/screens/Basket/components/Top';
import { Details } from '@/screens/Basket/components/Details';
import { Item } from '@/screens/Basket/components/Item';
import { CustomText } from '@/components/CustomText';

interface BasketProps {
  top: any;
  details: any;
  items: any;
}

export const Basket = ({ top, details, items }: BasketProps) => {
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
};

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
