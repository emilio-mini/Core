import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DotnavComponent } from './components/dotnav/dotnav.component';
import { TitleComponent } from './components/title/title.component';
import {
  Instagram,
  AtSignIcon,
  LucideAngularModule,
  Linkedin,
  MapPin,
  Link,
  GraduationCap,
  Target, HeartPulse, Download, ChevronLeft, ChevronRight, Maximize2, Aperture, Gamepad2, Coffee
} from "lucide-angular";
import { NgOptimizedImage} from "@angular/common";
import { TimelineComponent } from './components/timeline/timeline.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { UpdatesComponent } from './components/updates/updates.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DotnavComponent,
    TitleComponent,
    TimelineComponent,
    GalleryComponent,
    UpdatesComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    }),
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
