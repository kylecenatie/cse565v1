import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = (props) => {
   const [imageNum, setImageNum] = useState(1);
   return (
      <span>
         <SimpleImageSlider
            width={props.wid}
            height={props.high}
            images={props.images}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
       
      </span>
   );
}

export default ImageSlider;