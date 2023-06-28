import {Component} from '@angular/core';

@Component({
  selector: 'app-spark',
  templateUrl: './spark.component.html',
  styleUrls: ['./spark.component.scss']
})
export class SparkComponent {

  playClick(): void {
    window.open('https://spark.emilio-mini.me/', '_blank');
  }

  chocolateClick(): void {
    window.location.href = 'https://paypal.me/emiliominiberger';
  }

}
