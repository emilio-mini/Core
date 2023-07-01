import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {PhotoData} from "../../pages/photography/photography.component";
import {FireService} from "../../services/fire.service";
import {View} from "lucide-angular";

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

  ngAfterViewInit(): void {
    this.fireService.getImageUrl('gallery/compressed/' + this.data.name + '-min.' + this.data.type).then(url => {
      this.src = url;
      this.loaderSpan.nativeElement.style.opacity = 0;
    });
  }

}
