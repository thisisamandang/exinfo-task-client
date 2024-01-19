import { ExifInfoWithIndex, ImageData } from "../types";
type Props = {
  images: ImageData[];
  exifInfo: ExifInfoWithIndex[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};
const SelectorBar = (props: Props) => {
  return (
    <>
      <div className="bg-[#262626] pt-2 flex items-center justify-center">
        <p>1 Selected / {props.exifInfo[props.activeIndex]?.info.FileName}</p>
      </div>
      <div className="flex gap-2 h-full px-4 w-full bg-[#262626] overflow-x-scroll">
        {props.images.map((image, index) => (
          <div key={index} className="flex items-center ">
            <button
              onClick={() => {
                props.setActiveIndex(index);
              }}
              className="h-20 w-24"
            >
              {/* <img
              src={`https://dyirsvyfewuvw.cloudfront.net/converted-images/${image.s3Name}`}
              // alt={`Image ${image.file.replace(/^\.\/assets/, "")}`}
            /> */}
              <img
                // src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src={`https://dyirsvyfewuvw.cloudfront.net/converted-images/${image.s3Name}`}
                alt=""
                className={`h-full w-full border-1 ${
                  props.activeIndex === index
                    ? "focus:border-white"
                    : "border-0"
                } border`}
                style={{ opacity: props.activeIndex === index ? 1 : 0.5 }}
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectorBar;
