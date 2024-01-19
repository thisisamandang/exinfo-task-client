import { useState } from "react";
import { ExifInfoWithIndex } from "../types";
import { FaAngleDown, FaAngleUp, FaAngleRight } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

type Props = { exifInfo: ExifInfoWithIndex[]; activeIndex: number };

const Sidebar = (props: Props) => {
  const [showDetails, setShowDetails] = useState<boolean>(true);
  const notify = () => toast("Download Functionality is Under-development");

  return (
    <div className="w-1/4 bg-[#2E2E2E] flex flex-col gap-4 justify-between items-center">
      <div className="w-full py-4 px-2 flex flex-col justify-center">
        <div className="flex justify-between items-center mb-5 md:mt-10">
          <strong>About Image</strong>
          <button
            onClick={() => {
              setShowDetails(!showDetails);
            }}
          >
            {showDetails ? (
              <FaAngleUp className="text-white" />
            ) : (
              <FaAngleDown className="text-white" />
            )}
          </button>
        </div>
        {showDetails ? (
          <ul className="flex flex-col gap-2">
            <li>
              Lens: {props.exifInfo[props.activeIndex]?.info.Lens || "Unknown"}
            </li>
            <li>
              Capture Time:{" "}
              {props.exifInfo[props.activeIndex]?.info.CaptureTime || "Unknown"}
            </li>
            <li>
              ISO: {props.exifInfo[props.activeIndex]?.info.ISO || "Unknown"}
            </li>
            <li>
              Speed:{" "}
              {props.exifInfo[props.activeIndex]?.info.Speed || "Unknown"}
            </li>
            <li>
              Aperture:{" "}
              {props.exifInfo[props.activeIndex]?.info.Aperture || "Unknown"}
            </li>
            <li>
              File Name:{" "}
              {props.exifInfo[props.activeIndex]?.info.FileName || "Unknown"}
            </li>
            <li>
              Image Size:{" "}
              {props.exifInfo[props.activeIndex]?.info.ImageSize || "Unknown"}
            </li>
            <li>
              White Balance:{" "}
              {props.exifInfo[props.activeIndex]?.info.WhiteBalance ||
                "Unknown"}
            </li>
            <li>
              Rating:{" "}
              {props.exifInfo[props.activeIndex]?.info.Rating || "Unknown"}
            </li>
            <li>
              Camera:{" "}
              {props.exifInfo[props.activeIndex]?.info.Camera || "Unknown"}
            </li>
          </ul>
        ) : null}
      </div>
      <div className="w-full p-4 flex justify-center  bg-[#444444]">
        <button
          onClick={notify}
          className="w-4/5 px-2 py-3 flex items-center rounded-md justify-between bg-[#2EA18C]"
        >
          <span>Download</span>
          <FaAngleRight className="text-white" />
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default Sidebar;
