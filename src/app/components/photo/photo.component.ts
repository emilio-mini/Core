import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {PhotoData} from "../../pages/photography/photography.component";
import {FireService} from "../../services/fire.service";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements AfterViewInit {

  @Input() data!: PhotoData;

  @ViewChild('photo') photoElement!: ElementRef;
  @ViewChild('loader') loaderSpan!: ElementRef;

  src: string | undefined;
  visible: boolean = false;

  constructor(
    public fireService: FireService
  ) {
  }

  // Conversion as described in https://en.wikipedia.org/wiki/Decimal_degrees#Example
  get degrees(): string {
    if (!this.data.coordinates) {
      return '?';
    }

    const latD = Math.trunc(this.data.coordinates.latitude);
    const latM = Math.trunc(60 * Math.abs(this.data.coordinates.latitude - latD));
    const latS = Math.trunc(3600 * Math.abs(this.data.coordinates.latitude - latD) - 60 * latM);

    const lonD = Math.trunc(this.data.coordinates.longitude);
    const lonM = Math.trunc(60 * Math.abs(this.data.coordinates.longitude - lonD));
    const lonS = Math.trunc(3600 * Math.abs(this.data.coordinates.longitude - lonD) - 60 * lonM);

    let lat = latD + '°' + latM + '\'' + latS + '"';
    lat += this.data.coordinates.latitude > 0 ? 'N' : 'S';

    let lon = lonD + '°' + lonM + '\'' + lonS + '"';
    lon += this.data.coordinates.latitude > 0 ? 'E' : 'W';

    return lat + ' ' + lon;
  }

  ngAfterViewInit(): void {
    this.fireService.getImageUrl('pictures/compressed/' + this.data.id + '.' + this.data.type).then(url => {
      this.src = url;
    });

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.toggleVisibility(true);
        } else {
          this.toggleVisibility(false);
        }
      })
    }, {
      threshold: 0
    });
    observer.observe(this.photoElement.nativeElement);
  }

  toggleVisibility(visibility: boolean): void {
    if (visibility === this.visible) {
      return;
    }

    if (visibility) {
      this.visible = true;
    } else {
      this.visible = false;
      this.loaderSpan.nativeElement.style.opacity = 1;
    }
  }

  loaded(): void {
    this.loaderSpan.nativeElement.style.opacity = 0;
  }

  onDownloadClick(): void {
    this.fireService.getImageUrl('pictures/original/' + this.data.id + '.' + this.data.type).then(url => {
      this.fireService.promptDownload(url);
    });
  }

  onDownloadPreviewClick(): void {
    if (!this.src) {
      return;
    }

    this.fireService.promptDownload(this.src);
  }

}
