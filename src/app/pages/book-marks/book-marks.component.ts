import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { GetMoviesService } from 'src/moviesService/get-movies.service';
@Component({
  selector: 'app-book-marks',
  templateUrl: './book-marks.component.html',
  styleUrls: ['./book-marks.component.scss']
})

export class BookMarksComponent {
  @ViewChild('BookmarkBtn')bookmarkBtn:ElementRef | any;
  moviesFiltered:any = [];
  searched = '';
  showFiltered = false;
  filteredMovies:any = [];
  placeholder = 'Search for bookmarked movies or TV-shows'
  bookmarkedMovies:any = []

  constructor(private data:GetMoviesService){}

  ngOnInit():void{
    this.data.GetBookMarkedMovies()
    .subscribe(movie =>{
      this.bookmarkedMovies = movie;
    })
   }

   updateSearch(text:string){
    this.searched = text.toLowerCase();
    if (!this.searched) {
      this.showFiltered = false;
      return;
    }
    this.filteredMovies = this.bookmarkedMovies.filter((v:any) => v.title.toLowerCase().includes(this.searched))
    this.showFiltered = true;
   }
  }


























  // ngOnInit () {
  //   this.bookMarkedMovie = localStorage.getItem('bookMarkedMovies');
  //   let bookMarkParsed = JSON.parse(this.bookMarkedMovie);
  //   const movies = document.querySelector('.movies') as HTMLElement;
  //   const movieElements = bookMarkParsed.map((item: any) => {
  //     return JSON.parse(item);
  //   });
  //   movies.innerHTML += movieElements.join('');
  //   const movieDivs = Array.from(document.querySelectorAll('.movie'));
  //   const bookMarkBtns = document.querySelectorAll('.bookmark-btn');
  //   bookMarkBtns.forEach((btn)=>{
  //       btn.addEventListener('click', function (e: any) {
  //       console.log('clicked');
  //       btn.classList.remove('active');
  //       const movie = e.target.closest('.movie');
  //       const index = movieDivs.indexOf(movie);
  //       bookMarkParsed.splice(index, 1);
  //       const modArr = JSON.stringify(bookMarkParsed);
  //       localStorage.setItem('bookMarkedMovies', modArr);
  //       const newArr:any = localStorage.getItem('bookMarkedMovies');
  //       movies.innerHTML = '';
  //       const newMovieElements = JSON.parse(newArr).map((item:any)=>{
  //         return JSON.parse(item);
  //       })
  //       movies.innerHTML += newMovieElements.join('');
  //     })
  //   });
  // }

