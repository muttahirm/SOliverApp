import React, { memo } from 'react';
import {Text, View} from 'react-native';
import {styles} from './Tag.style';
import { getColor } from '../../utils/getBackgroudColor';
import { getTextColor } from '../../utils/getTextColor';

interface TagProps {
  tagName: string;
}



export const Tag = memo(({tagName}: TagProps) => {
  return tagName ? (
    <View style={[styles.container, { backgroundColor: getColor(tagName) }]}>
          <Text style={[styles.text, {color: getTextColor(tagName)}]}>{tagName}</Text>
    </View>
  ) : (
    <View />
  );
});
