export interface ImageData {
  index: number;
  file: string;
}
export interface ExifInfo {
  Lens?: string;
  FocusMode?: string;
  CaptureTime?: string;
  ISO?: number;
  Speed?: string;
  Aperture?: string;
  FileName?: string;
  ImageSize?: string;
  WhiteBalance?: string;
  Rating?: number;
  Camera?: string;
}
export interface ExifInfoWithIndex {
  index: number;
  info: ExifInfo;
}
