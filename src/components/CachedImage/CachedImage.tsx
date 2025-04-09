import React, { memo, useMemo } from 'react';
import FastImage, { FastImageProps, Priority } from '@d11/react-native-fast-image';

export type CachedImageProps = {
  uri: string;
  priority?: Priority;
} & FastImageProps;

const noop = () => {};

export const CachedImage = memo(
  ({
    style,
    uri,
    resizeMode = 'cover',
    onLayout = noop,
    onLoad = noop,
    priority = FastImage.priority.normal,
    ...props
  }: CachedImageProps) => {
    const source = useMemo(() => ({ uri, priority }), [priority, uri]);

    return (
      <FastImage
        style={style}
        source={source}
        resizeMode={FastImage.resizeMode[resizeMode]}
        onLayout={onLayout}
        onLoad={onLoad}
        {...props}
      />
    );
  },
);
