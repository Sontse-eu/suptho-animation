import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import NearbyEventItem from './NearbyEventItem';

const NearbyEventList = () => {
  const _keyExtractor = (item, idx) => {
    return item?.id?.toString() || idx.toString();
  };

  const _renderItem = ({item, index}) => <NearbyEventItem dat={item} />;

  return (
    <FlatList
      data={['', '', '']}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      style={styles.listStyles}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  listStyles: {
    height: 170,
    maxHeight: 170,
    backgroundColor: '#fafafa',
  },
});

export default NearbyEventList;
