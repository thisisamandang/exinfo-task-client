// src/components/ImageGallery.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectorBar from "./components/SelectorBar";
import { ExifInfoWithIndex, ImageData } from "./types";
import Sidebar from "./components/Sidebar";
import PreviewSection from "./components/PreviewSection";

const App: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [exifInfo, setExifInfo] = useState<ExifInfoWithIndex[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{
          images: ImageData[];
          exifInfo: ExifInfoWithIndex[];
        }>("http://localhost:8000/images");
        setImages(response.data.images);

        setExifInfo(response.data.exifInfo);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);
  console.log(images);
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col w-3/4 ">
        <h1>Image Gallery</h1>
        <PreviewSection
          images={images}
          exifInfo={exifInfo}
          activeIndex={activeIndex}
        />
        <SelectorBar
          images={images}
          exifInfo={exifInfo}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <Sidebar exifInfo={exifInfo} activeIndex={activeIndex} />
    </div>
  );
};

export default App;