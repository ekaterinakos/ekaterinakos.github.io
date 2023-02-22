import React from "react";
import svg from './svg/icons.svg'

export const Svg = ({icon, fill, color, className}) => {
    const viewBox = {
      facebook: '0 0 12 22',
      insta: '0 0 21 21',
      vk: '0 0 25 15',
    };


  return (
      <svg
        className={className}
        color={color}
        viewBox={viewBox[icon]}
        fill={fill}
      >
        <use href={`${svg}#${icon}`} />
      </svg>
  );

}