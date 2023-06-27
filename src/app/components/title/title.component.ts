import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() index: number = 0;
  @Input() header: string = '';

  @Input() inverted: boolean = false;

  getIndex(): string {
    return this.index.toLocaleString('de-DE', {
      minimumIntegerDigits: 2
    });
  }

}
