import React from "react";
import { ExifInfoWithIndex, ImageData } from "../types";

type Props = {
  images: ImageData[];
  exifInfo: ExifInfoWithIndex[];
  activeIndex: number;
};

const PreviewSection = (props: Props) => {
  return (
    <div className="h-3/4">
      {/* Displaying the file name */}
      {/* {props.images[props.activeIndex].file} */}
      {props.activeIndex}
      {/* Uncomment the following lines to display the image */}
      <img
        className="h-full w-full"
        src={`http://localhost:8000/images/assets/${
          props.images[props.activeIndex]?.file
        }`}
        // alt={`Image ${props.images[0].file.replace(/^\.\/assets/, "")}`}
      />
      {/* <img
        src={`http://localhost:8000/images/assets/${
          props.images[props.activeIndex].file
        }`}
        alt={`Image ${props.images[props.activeIndex].file}`}
      /> */}
    </div>
  );
};

export default PreviewSection;
