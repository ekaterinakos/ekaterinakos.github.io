import React from "react";

export const SocialIcon = ({ link, img, text, className }) => {
    return (
      <a className={className} href={link}>
        <img src={img} alt={text} />
      </a>
    );  
};

