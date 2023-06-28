import {Component} from '@angular/core';
import {TimelineData} from "../../components/timeline/timeline.component";
import data from '../../../assets/json/cv.json';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {

  readonly cvData: TimelineData[] = data;

}
