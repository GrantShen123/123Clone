import { loadOpenCV } from './opencv-loader';

interface CV {
  Mat: any;
  MatVector: any;
  Size: any;
  COLOR_RGBA2GRAY: number;
  BORDER_DEFAULT: number;
  RETR_LIST: number;
  CHAIN_APPROX_SIMPLE: number;
  CV_8UC4: number;
  cvtColor(src: any, dst: any, code: number, dstCn: number): void;
  GaussianBlur(src: any, dst: any, ksize: any, sigmaX: number, sigmaY: number, borderType: number): void;
  Canny(image: any, edges: any, threshold1: number, threshold2: number, apertureSize: number, L2gradient: boolean): void;
  findContours(image: any, contours: any, hierarchy: any, mode: number, method: number): void;
  contourArea(contour: any): number;
  arcLength(curve: any, closed: boolean): number;
  approxPolyDP(curve: any, approxCurve: any, epsilon: number, closed: boolean): void;
}

export class IdDetector {
  private cv: CV | null = null;

  constructor() {}

  async init(): Promise<void> {
    this.cv = await loadOpenCV() as CV;
  }

  detectId(imageData: ImageData): boolean {
    if (!this.cv) {
      console.error('OpenCV not initialized');
      return false;
    }

    const src = new this.cv.Mat(imageData.height, imageData.width, this.cv.CV_8UC4);
    src.data.set(imageData.data);
    const dst = new this.cv.Mat();

    this.cv.cvtColor(src, src, this.cv.COLOR_RGBA2GRAY, 0);

  
    this.cv.GaussianBlur(src, src, new this.cv.Size(5, 5), 0, 0, this.cv.BORDER_DEFAULT);
    

    this.cv.Canny(src, dst, 20, 60, 3, false);
    

    const contours = new this.cv.MatVector();
    const hierarchy = new this.cv.Mat();
    this.cv.findContours(dst, contours, hierarchy, this.cv.RETR_LIST, this.cv.CHAIN_APPROX_SIMPLE);
    

    let isIdFound = false;
    for (let i = 0; i < contours.size(); ++i) {
      const contour = contours.get(i);
      const area = this.cv.contourArea(contour);
      const imageArea = src.rows * src.cols;
      
  
      if (area > imageArea * 0.0001 && area < imageArea * 0.9999) {
        const perimeter = this.cv.arcLength(contour, true);
        const approx = new this.cv.Mat();
        this.cv.approxPolyDP(contour, approx, 0.2 * perimeter, true);


        if (approx.rows >= 1 && approx.rows <= 15) {
          isIdFound = true;
        }
        approx.delete();
      }
      
      if (isIdFound) break;
    }
    
    src.delete(); dst.delete(); contours.delete(); hierarchy.delete();
    
    return isIdFound;
  }
}