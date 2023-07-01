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

  @ViewChild('loader') loaderSpan!: ElementRef;

  src: string | undefined;

  constructor(
    public fireService: FireService
  ) {
  }

  // Conversion as described in https://en.wikipedia.org/wiki/Decimal_degrees#Example
  get degrees(): string {
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
    this.fireService.getImageUrl('gallery/compressed/' + this.data.name + '-min.' + this.data.type).then(url => {
      this.src = url;
      this.loaderSpan.nativeElement.style.opacity = 0;
    });
  }

  onDownloadClick(): void {
    this.fireService.getImageUrl('gallery/original/' + this.data.name + '.' + this.data.type).then(url => {
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
