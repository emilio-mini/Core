import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {DotnavComponent} from './components/dotnav/dotnav.component';
import {TitleComponent} from './components/title/title.component';
import {
  Aperture,
  AtSignIcon,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Download,
  Gamepad2,
  GraduationCap,
  HeartPulse,
  Instagram,
  Link,
  Linkedin,
  LucideAngularModule,
  MapPin,
  Maximize2,
  Target
} from "lucide-angular";
import {NgOptimizedImage} from "@angular/common";
import {TimelineComponent} from './components/timeline/timeline.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {UpdatesComponent} from './components/updates/updates.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {CursorComponent} from './components/cursor/cursor.component';
import {CvComponent} from './pages/cv/cv.component';
import {PhotographyComponent} from './pages/photography/photography.component';
import {SparkComponent} from './pages/spark/spark.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DotnavComponent,
    TitleComponent,
    TimelineComponent,
    GalleryComponent,
    UpdatesComponent,
    CarouselComponent,
    CursorComponent,
    CvComponent,
    PhotographyComponent,
    SparkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    LucideAngularModule.pick({
      AtSignIcon,
      Instagram,
      Linkedin,
      MapPin,
      Link,
      GraduationCap,
      Target,
      HeartPulse,
      Download,
      ChevronLeft,
      ChevronRight,
      Maximize2,
      Aperture,
      Gamepad2,
      Coffee
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
