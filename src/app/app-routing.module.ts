import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CvComponent} from "./pages/cv/cv.component";
import {PhotographyComponent} from "./pages/photography/photography.component";
import {SparkComponent} from "./pages/spark/spark.component";

const routes: Routes = [
  {
    path: 'home',
    title: 'Emilio Miniberger | Portfolio',
    component: HomeComponent
  },
  {
    path: 'cv',
    title: 'Emilio Miniberger | CV',
    component: CvComponent
  },
  {
    path: 'photography',
    title: 'Emilio Miniberger | Photography',
    component: PhotographyComponent
  },
  {
    path: 'spark',
    title: 'Emilio Miniberger | Spark',
    component: SparkComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
