import {Component, Input} from '@angular/core';
import {ScreenshotData} from "../updates/updates.component";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() pathPrefix: string = '/';
  @Input() images: ScreenshotData[] = [];

  selectedIndex = 0;

  previous(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    } else {
      this.selectedIndex = this.images.length - 1;
    }
  }

  next(): void {
    if (this.selectedIndex >= this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
