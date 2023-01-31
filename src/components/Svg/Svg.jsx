import React from "react";
import svg from './svg/icons.svg'

export const Svg = ({icon, fill, width, color, className}) => {
    const viewBox = {
      facebook: '0 0 12 22',
      insta: '0 0 21 21',
      vk: '0 0 26 15',
    };


    return (
      <svg className={className} color={color} viewBox = {viewBox[icon]} fill={fill} width={width}>
        <use href={`${svg}#${icon}`} />
      </svg>
    );

}