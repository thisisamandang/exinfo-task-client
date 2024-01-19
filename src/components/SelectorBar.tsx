import { ExifInfoWithIndex, ImageData } from "../types";
type Props = {
  images: ImageData[];
  exifInfo: ExifInfoWithIndex[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};
const SelectorBar = (props: Props) => {
  return (
    <div className="flex gap-2 overflow-x-scroll">
      {props.images.map((image, index) => (
        <div key={index} className="h-10 w-10">
          <button
            onClick={() => {
              props.setActiveIndex(index);
            }}
          >
            <img
              src={`https://dyirsvyfewuvw.cloudfront.net/converted-images/${image.s3Name}`}
              // alt={`Image ${image.file.replace(/^\.\/assets/, "")}`}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectorBar;
