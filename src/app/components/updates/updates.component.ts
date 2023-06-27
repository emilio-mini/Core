import { Component } from '@angular/core';
import updateJSON from '../../../assets/json/updates.json';
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

export type UpdateData = {
  timestamp: string;
  title: string;
  text: string;
  screenshots: ScreenshotData[];
}

export type ScreenshotData = {
  src: string;
  alt: string;
  description: string;
}

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent {

  updates: UpdateData[] = updateJSON;

  constructor() {
    dayjs.extend(advancedFormat);
  }

  format(date: string, format: string): string {
    return dayjs(date).format(format);
  }

}
