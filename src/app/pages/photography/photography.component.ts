import {Component} from '@angular/core';
import {FireService} from "../../services/fire.service";
import firebase from "firebase/compat";
import GeoPoint = firebase.firestore.GeoPoint;

export type PhotoData = {
  name: string;
  type: string;
  aperture: number;
  shutterSpeed: string;
  focalLength: number;
  iso: number;
  device: string;
  location: string;
  coordinates: GeoPoint;
}

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent {

  photoData: Promise<PhotoData[]>;

  constructor(
    fireService: FireService
  ) {
    this.photoData = fireService.getGallery();
  }

}
