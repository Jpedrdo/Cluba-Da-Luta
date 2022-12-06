import React from 'react';

const SlideItem = ({ img }) => {
  return (
    <img
      src={img}
      alt="platformImg"
      style={{
        borderRadius: '5%',
        width: '100%',
        minWidth: '100%'
      }}
    />
  );
};

export default SlideItem;
