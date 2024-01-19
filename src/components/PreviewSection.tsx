import { ExifInfoWithIndex, ImageData } from "../types";

type Props = {
  images: ImageData[];
  exifInfo: ExifInfoWithIndex[];
  activeIndex: number;
};

const PreviewSection = (props: Props) => {
  return (
    <div className="bg-black">
      Showing {props.images.length} Photos
      <div className="flex justify-center p-2">
        <img
          src={`https://dyirsvyfewuvw.cloudfront.net/converted-images/${
            props.images[props.activeIndex]?.s3Name
          }`}
          className="h-[75vh] "
          alt={`Image Preview`}
        />
      </div>
    </div>
  );
};

export default PreviewSection;
