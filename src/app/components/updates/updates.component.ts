import {Component} from '@angular/core';
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import {FireService} from "../../services/fire.service";
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export type UpdateData = {
  timestamp: Timestamp;
  title: string;
  text: string;
  screenshots?: ScreenshotData[];
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

  updates: UpdateData[] = [];

  constructor(
    private fireService: FireService
  ) {
    dayjs.extend(advancedFormat);

    fireService.getUpdates()
      .then(updates => this.updates = updates);
  }

  format(date: Timestamp, format: string): string {
    return dayjs(date.toDate()).format(format);
  }

}
