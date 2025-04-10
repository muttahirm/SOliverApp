import {StyleSheet} from 'react-native';

const PRODUCT_IMAGE_HEIGHT = 250;

export const styles = StyleSheet.create({
  image: {
    height: PRODUCT_IMAGE_HEIGHT,
  },
  tagContainer: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#007F5F',
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 10,
  },
  conatinerText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
