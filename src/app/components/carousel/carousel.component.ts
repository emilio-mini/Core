import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ScreenshotData} from "../updates/updates.component";
import {FireService} from "../../services/fire.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {

  @Input() pathPrefix: string = '/';
  @Input() images: ScreenshotData[] = [];

  @ViewChild('loader') loader!: ElementRef;

  selectedIndex = 0;
  selectedPath: string | undefined = undefined;
  protected readonly undefined = undefined;

  constructor(
    private fireService: FireService
  ) {
  }

  ngAfterViewInit(): void {
    this.updateImageUrl();
  }

  updateImageUrl(): void {
    this.fireService.getImageUrl(this.pathPrefix + this.images[this.selectedIndex].src).then(url => {
      this.selectedPath = url;
      this.loader.nativeElement.style.opacity = 0;
    });
  }

  previous(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    } else {
      this.selectedIndex = this.images.length - 1;
    }
    this.updateImageUrl();
  }

  next(): void {
    if (this.selectedIndex >= this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
    this.updateImageUrl();
  }

  download(): void {
    if (!this.selectedPath) {
      return;
    }

    this.fireService.promptDownload(this.selectedPath);
  }
}
