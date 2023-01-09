import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookMarksComponent } from './pages/book-marks/book-marks.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'movies',component:MoviesComponent},
  {path:'tv-series',component:TvSeriesComponent},
  {path:'bookmarks',component:BookMarksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
