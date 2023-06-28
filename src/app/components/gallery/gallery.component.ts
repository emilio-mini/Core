import {Component, ElementRef, ViewChild} from '@angular/core';
import {GalleryService} from "../../services/gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  @ViewChild('top') topImg!: ElementRef;
  @ViewChild('bottom') bottomImg!: ElementRef;

  topIsTop = true;
  blocked = false;


  constructor(
    public galleryService: GalleryService
  ) {
  }

  fade(): void {
    if (this.topIsTop) {
      this.topImg.nativeElement.style.opacity = 0;
      setTimeout(() => {
        this.topIsTop = false;
        this.blocked = false;
        this.galleryService.next();
      }, 1000);
    } else {
      this.topImg.nativeElement.style.opacity = 1;
      setTimeout(() => {
        this.topIsTop = true;
        this.blocked = false;
        this.galleryService.next();
      }, 1000);
    }
  }

  previous(): void {
    if (this.blocked) {
      return;
    }

    this.blocked = true;
    if (this.galleryService.direction !== 'backward') {
      this.galleryService.direction = 'backward';
    }
    this.fade();
  }

  next(): void {
    if (this.blocked) {
      return;
    }

    this.blocked = true;
    if (this.galleryService.direction !== 'forward') {
      this.galleryService.direction = 'forward';
    }
    this.fade();
  }

}
