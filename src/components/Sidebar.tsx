import { ExifInfoWithIndex } from "../types";

type Props = { exifInfo: ExifInfoWithIndex[]; activeIndex: number };
const Sidebar = (props: Props) => {
  return (
    <div className="w-1/4">
      <div>
        <strong>Image Metadata:</strong>
        <ul>
          <li>Lens: {props.exifInfo[props.activeIndex]?.info.Lens}</li>
          <li>
            Capture Time: {props.exifInfo[props.activeIndex]?.info.CaptureTime}
          </li>
          <li>ISO: {props.exifInfo[props.activeIndex]?.info.ISO}</li>
          <li>Speed: {props.exifInfo[props.activeIndex]?.info.Speed}</li>
          <li>Aperture: {props.exifInfo[props.activeIndex]?.info.Aperture}</li>
          <li>File Name: {props.exifInfo[props.activeIndex]?.info.FileName}</li>
          <li>
            Image Size: {props.exifInfo[props.activeIndex]?.info.ImageSize}
          </li>
          <li>
            White Balance:{" "}
            {props.exifInfo[props.activeIndex]?.info.WhiteBalance}
          </li>
          <li>Rating: {props.exifInfo[props.activeIndex]?.info.Rating}</li>
          <li>Camera: {props.exifInfo[props.activeIndex]?.info.Camera}</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
