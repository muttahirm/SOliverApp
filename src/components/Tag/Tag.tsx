import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Tag.style';
import { getColor } from '../../utils/getBackgroudColor';

interface TagProps {
  tagName: string;
}



export const Tag = ({tagName}: TagProps) => {
  return tagName ? (
    <View style={[styles.container, { backgroundColor: getColor(tagName) }]}>
      <Text style={styles.text}>{tagName}</Text>
    </View>
  ) : (
    <View />
  );
};
