import {Component, ElementRef, ViewChild, ViewChildren} from '@angular/core';
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

  readonly timeout: NodeJS.Timer;

  constructor(
    public galleryService: GalleryService
  ) {
    this.timeout = setInterval(() => {
      this.blocked = true;
      this.galleryService.direction = 'forward';
      this.fade();
    }, 10000);
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
    this.timeout.refresh();
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
