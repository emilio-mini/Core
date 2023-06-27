import {Component} from '@angular/core';
import {NavService} from "../../services/nav.service";
import {TimelineData} from "../../components/timeline/timeline.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly cvData: TimelineData[] = [
    {
      start: 2013,
      end: 2017,
      title: 'Gymnasium Dachsberg',
      color: 'blue',
      links: [
        {
          icon: 'map-pin',
          tooltip: 'Click to see where it is located on Open Street Maps!',
          target: 'https://www.openstreetmap.org/#map=19/48.29854/13.92827'
        },
        {
          icon: 'link',
          tooltip: 'Click to view the homepage of this institution',
          target: 'https://www.dachsberg.at/'
        },
        {
          icon: 'graduation-cap',
          text: 'Graduated 2017'
        }
      ]
    },
    {
      start: 2017,
      end: 2022,
      title: 'HTL Grieskirchen',
      color: 'teal',
      links: [
        {
          icon: 'map-pin',
          tooltip: 'Click to see where it is located on Open Street Maps!',
          target: 'https://www.openstreetmap.org/#map=19/48.23539/13.83531'
        },
        {
          icon: 'link',
          tooltip: 'Click to view the homepage of this institution',
          target: 'https://www.htl-grieskirchen.at/'
        },
        {
          icon: 'target',
          tooltip: 'Field of study',
          text: 'Computer Sciences'
        },
        {
          icon: 'graduation-cap',
          tooltip: 'Final degree',
          text: 'Matura Degree'
        }
      ]
    },
    {
      start: 2022,
      end: 2024,
      title: 'Paramedic',
      color: 'red',
      links: [
        {
          icon: 'map-pin',
          tooltip: 'Click to see where it is located on Open Street Maps!',
          target: 'https://www.openstreetmap.org/#map=18/48.17272/14.02198'
        },
        {
          icon: 'link',
          tooltip: 'Click to view the homepage of this institution',
          target: 'https://www.roteskreuz.at/home'
        },
        {
          icon: 'heart-pulse',
          tooltip: 'Job experience',
          text: '1.700+ hours'
        }
      ]
    }
  ]

  constructor(
    public navService: NavService
  ) {
  }

  onScroll(event: WheelEvent): void {
    if (event.deltaY < 0) {
      this.navService.up();
    } else if (event.deltaY > 0) {
      this.navService.down();
    }
  }

  playClick(): void {
    window.open('https://spark.emilio-mini.me/', '_blank');
  }

  chocolateClick(): void {
    window.location.href = 'https://paypal.me/emiliominiberger';
  }

}
