import {Injectable} from '@angular/core';

export type MouseState = 'default' | 'click';

@Injectable({
  providedIn: 'root'
})
export class CursorService {

  mouseState: MouseState = 'default';

  constructor() {
  }

  mouseEnter(state: MouseState): void {
    this.mouseState = state;
  }

  mouseLeave(): void {
    this.mouseState = 'default';
  }

}
