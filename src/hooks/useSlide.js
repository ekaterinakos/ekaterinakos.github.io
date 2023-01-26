import { useCallback, useState } from 'react';

export const useSlide = (slideItemsLength, itemOffsetWidth, count = 2) => {
  const [transform, setTransform] = useState(0);

  const transformStyle = {
    transform: `translateX(${-transform}px)`,
  };

  const leftTranslate = useCallback(
    () =>
      setTransform((position) => {
        position -= itemOffsetWidth * count;
        return (position = Math.max(0, position));
      }),
    [itemOffsetWidth,count]
  );

  const rightTranslate = useCallback(
    () =>
      setTransform((position) => {
        position += itemOffsetWidth * count;
        return (position = Math.min(
          position,
          itemOffsetWidth * (slideItemsLength - count)
        ));
      }),
    [itemOffsetWidth, slideItemsLength, count]
  );

  return { transformStyle, leftTranslate, rightTranslate };
};
