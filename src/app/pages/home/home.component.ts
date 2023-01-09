import { JsonPipe } from '@angular/common';
import { Attribute, Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/moviesService/get-movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fakeAsync } from '@angular/core/testing';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  Allvideos:any = [];
  recommendedVideos:any = [];
  trendingVideos:any = [];
  filteredVideos:any = [];
  searched = '';
  showFiltered = false;
  placeholder = 'Search for movies or TV-shows';
  bookMarkedMovies:any = [];
  
   constructor(private data:GetMoviesService){}

   ngOnInit():void{
    this.data.GetMovies()
    .subscribe(video =>{
      this.Allvideos = video;
      this.trendingVideos = video.filter(movie => movie.isTrending)
      this.recommendedVideos = video.filter(movie => !movie.isTrending)
    })

   }
   

   updateSearch(text:string){
    this.searched = text.toLowerCase();
    if (!this.searched) {
      this.showFiltered = false;
      return;
    }
    this.filteredVideos = this.Allvideos.filter((v:any) => v.title.toLowerCase().includes(this.searched))
    this.showFiltered = true;
   }

  






















   
  // toggleBookmark(e:any,btn:any){
  //   btn.classList.toggle("active");
  //   const movie = e.target.closest('.movie');
  //   this.bookMarkedVideos.push(JSON.stringify(movie.outerHTML));
  //   window.localStorage.setItem("bookMarkedMovies",JSON.stringify(this.bookMarkedVideos));
  // }
  // filterBySearch(value:any){
  //   this.recommendedVideos = this.Allvideos.filter((movie:any)=>{
  //     return value.toLowerCase() === movie.title.toLowerCase();
  //   })
  //   this.bookMarkedVideos = this.Allvideos.filter((movie:any)=>{
  //     return value.toLowerCase() === movie.title.toLowerCase();
  //   })
  // }

  // checkLength(value:any){
  //   if (value.length <= 0){
  //     this.recommendedVideos = this.Allvideos.filter((movie:any)=>{
  //       return movie.isTrending === false;
  //     });
  //     this.recommendedVideos = this.Allvideos.filter((movie:any) =>{
  //       return movie.isTrending === true;
  //     });
  //   }
  // }
}
