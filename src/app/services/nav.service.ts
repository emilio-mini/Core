import {HostListener, Injectable} from '@angular/core';

export type PageContent = {
  header: string;
  content: string;
  inverted: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class NavService {

  pageCount: number = 4;
  selectedIndex: number = 0;

  content: PageContent[] = [
    {
      header: 'About Me',
      content: 'Hi! My name is <b class="highlight teal">Emilio Miniberger</b>. I am a <b class="highlight blue">front-end\n' +
        '    developer</b> and <b class="highlight red">paramedic</b>. I attended a Higher Federal Technical\n' +
        '    College of Computer Sciences and Informatics in Austria, where I graduated in 2022 with a Matura Degree.\n' +
        '    <br><br>\n' +
        '    I started working as a paramedic in 2022 and have gathered over 1.800 hours of experience since.',
      inverted: false
    },
    {
      header: 'Curriculum Vitae',
      content: '',
      inverted: false
    },
    {
      header: 'Photography',
      content: 'Shot on Pixel 7 Pro',
      inverted: true
    },
    {
      header: 'Spark',
      content: 'Spark is an <b class="highlight teal">online</b>, <b class="highlight blue">multiplayer</b> card game, <b class="highlight red">developed by me</b> and running right in your favourite browser.\n' +
        '    <br><br>\n' +
        '    It started off as a school project back in the day before I decided to rewrite it from scratch.\n' +
        '    You can play the old version now or wait a while longer while I get the new version ready for release!',
      inverted: false
    }
  ];

  constructor() {
    const local = localStorage.getItem('index');
    if (local) {
      const index = +local;
      if (index >= 0 && index < this.pageCount) {
        this.selectedIndex = index;
      }
    }
  }

  get current(): PageContent {
    return this.content[this.selectedIndex];
  }

  selectIndex(index: number): void {
    if (index < this.pageCount && index >= 0) {
      this.selectedIndex = index;
      localStorage.setItem('index', this.selectedIndex.toString());
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
