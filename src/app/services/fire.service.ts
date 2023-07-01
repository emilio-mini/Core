import {Injectable} from '@angular/core';
import {FirebaseOptions, initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {UpdateData} from "../components/updates/updates.component";
import {PhotoData} from "../pages/photography/photography.component";

@Injectable({
  providedIn: 'root'
})
export class FireService {

  readonly config: FirebaseOptions = {
    apiKey: "AIzaSyA6yGaTlRXCMmnbqF4FkiP19ZRaK54CVYQ",
    authDomain: "portfolio-3c5bc.firebaseapp.com",
    projectId: "portfolio-3c5bc",
    storageBucket: "portfolio-3c5bc.appspot.com",
    messagingSenderId: "994678853677",
    appId: "1:994678853677:web:9a23a3949a79c71e90a8a4"
  };

  readonly app;
  readonly db;
  readonly storage;

  readonly updatesCollection;
  readonly galleryCollection;

  constructor() {
    this.app = initializeApp(this.config);
    this.db = getFirestore(this.app);
    this.storage = getStorage(this.app);

    this.updatesCollection = collection(this.db, 'spark-updates');
    this.galleryCollection = collection(this.db, 'gallery');
  }

  async getGallery(): Promise<PhotoData[]> {
    const query = await getDocs(this.galleryCollection);
    return query.docs
      .map(doc => doc.data())
      .map(data => data as PhotoData)
      .sort((a, b) => +a.name.split('-')[1] < +b.name.split('-')[1] ? 1 : -1);
  }

  async getUpdates(): Promise<UpdateData[]> {
    const query = await getDocs(this.updatesCollection);
    return query.docs
      .map(doc => doc.data())
      .map(data => data as UpdateData)
      .sort((a, b) => a.timestamp.seconds < b.timestamp.seconds ? 1 : -1);
  }

  async getImageUrl(path: string): Promise<string> {
    return getDownloadURL(ref(this.storage, path));
  }

  // https://stackoverflow.com/a/49886131
  promptDownload(url: string): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      const urlCreator = window.URL || window.webkitURL;
      const imageUrl = urlCreator.createObjectURL(this.response);
      const tag = document.createElement('a');
      tag.href = imageUrl;
      tag.download = '';
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    }
    xhr.send();
  }

}
