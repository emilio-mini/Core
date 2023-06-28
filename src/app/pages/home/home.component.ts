import {Component} from '@angular/core';
import {NavService} from "../../services/nav.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cvData = [];

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
