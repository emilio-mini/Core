import {AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren} from '@angular/core';

export type TimelineData = {
  start: number;
  end: number;
  title: string;
  color: string;
  links: {
    icon: string;
    text?: string;
    target?: string;
    tooltip?: string;
  }[];
};

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements AfterViewInit {

  @Input() start: number = 0;
  @Input() end: number = 1;
  @Input() points: number[] = [];
  @Input() data: TimelineData[] = [];

  @ViewChild('timeline') timeline!: ElementRef;
  @ViewChild('today') today!: ElementRef;
  @ViewChildren('points') pointDivs!: QueryList<any>;
  @ViewChildren('datasets') dataDivs!: QueryList<any>;

  readonly currentYear = new Date().getFullYear();

  ngAfterViewInit(): void {
    this.calculatePoints();
  }

  calculatePoints(): void {
    this.today.nativeElement.style.left = this.getLeft(this.currentYear) - this.today.nativeElement.offsetWidth + 'px';

    this.pointDivs.forEach((element, index) => {
      element.nativeElement.style.left = this.getLeft(this.points[index]) - element.nativeElement.offsetWidth + 'px';
    });

    this.dataDivs.forEach((element, index) => {
      const start = this.getLeft(this.data[index].start);
      element.nativeElement.style.left = start + 'px';
      element.nativeElement.style.width = (this.getLeft(this.data[index].end) - start) - 20 + 'px';
    });
  }

  getLeft(point: number): number {
    return (((point - this.start) / (this.end - this.start)) * (this.timeline.nativeElement.offsetWidth - 100)) + 50;
  }

}
