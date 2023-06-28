import {Component} from '@angular/core';
import {NavService} from "../../services/nav.service";

@Component({
  selector: 'app-dotnav',
  templateUrl: './dotnav.component.html',
  styleUrls: ['./dotnav.component.scss']
})
export class DotnavComponent {

  constructor(
    public navService: NavService
  ) {
  }

}
