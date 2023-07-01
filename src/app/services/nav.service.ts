import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  readonly paths = [
    '/home',
    '/cv',
    '/photography',
    '/spark'
  ];

  pageCount: number = 4;
  selectedIndex: number = 0;

  constructor(
    private router: Router
  ) {
    this.selectedIndex = this.paths.findIndex(value => window.location.href.endsWith(value));
    if (this.selectedIndex === -1) {
      this.selectedIndex = 0;
    }
  }

  get currentInverted(): boolean {
    return false;
  }

  navigateByIndex(index: number): void {
    this.router.navigateByUrl(this.paths[index] ?? '/home');
  }

  selectIndex(index: number): void {
    if (index < this.pageCount && index >= 0) {
      this.selectedIndex = index;
      this.navigateByIndex(this.selectedIndex);
    }
  }

  up(): void {
    if (this.selectedIndex > 0) {
      this.selectIndex(this.selectedIndex - 1);
    }
  }

  down(): void {
    if (this.selectedIndex < this.pageCount - 1) {
      this.selectIndex(this.selectedIndex + 1);
    }
  }

}
