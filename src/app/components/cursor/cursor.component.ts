import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {CursorService} from "../../services/cursor.service";

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent {

  @ViewChild('cursor') cursor!: ElementRef;

  hold: boolean = false;

  constructor(
    public cursorService: CursorService
  ) {
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.cursor) {
      return;
    }

    this.cursor.nativeElement.style.opacity = 1;
    this.cursor.nativeElement.style.top = event.clientY + 'px';
    this.cursor.nativeElement.style.left = event.clientX + 'px';
  }

  @HostListener('window:mouseout', ['$event'])
  onMouseOut(event: MouseEvent): void {
    this.cursor.nativeElement.style.opacity = 0;
  }

  @HostListener('window:mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.hold = true;
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    this.hold = false;
  }

}
