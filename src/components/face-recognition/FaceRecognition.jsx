import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        {imageUrl && (
          <img
            src={imageUrl}
            alt='face recognition result'
            width='500px'
            height='auto'
          />
        )}
      </div>
    </div>
  );
};

export default FaceRecognition;
