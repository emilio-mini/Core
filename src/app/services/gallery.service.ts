import { Injectable } from '@angular/core';
import data from '../../assets/img/data.json';

export type ImageData = {
  src: string;
  aperture: number;
  shutterSpeed: string;
  focalLength: number;
  iso: number;
  originalResolution: string;
  mp: string;
  device: string;
  location: string;
  coordinates: string;
  download: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  imageData: ImageData[] = data;

  currentImage: number = 0;

  direction: 'forward' | 'backward' = 'forward';

  constructor() { }

  get current(): ImageData {
    return this.imageData[this.currentImage];
  }

  get future(): ImageData {
    if (this.direction === 'forward') {
      return (this.currentImage + 1) >= this.imageData.length ? this.imageData[0] : this.imageData[this.currentImage + 1];
    } else {
      return this.currentImage > 0 ? this.imageData[this.currentImage - 1] : this.imageData[this.imageData.length - 1];
    }
  }

  next(): void {
    if (this.direction === 'forward') {
      if (this.currentImage + 1 >= this.imageData.length) {
        this.currentImage = 0;
      } else {
        this.currentImage++;
      }
    } else {
      if (this.currentImage > 0) {
        this.currentImage--;
      } else {
        this.currentImage = this.imageData.length - 1;
      }
    }
  }

}
