import { BuiltinTypeName, ParseSourceFile, ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output,} from '@angular/core';
import { GetMoviesService } from 'src/moviesService/get-movies.service';
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent {
  @Input() bookmarked = false;
  @Output() changed = new EventEmitter<boolean>();
  movies:any;
  bookmarkedMovies:any;
  choosenMovie:any;
  constructor(private data:GetMoviesService){}

  ngOnInit(){
    this.data.GetMovies()
    .subscribe(video =>{
      this.movies = video;
    })
    this.data.GetBookMarkedMovies()
    .subscribe(video =>{
      this.bookmarkedMovies = video;
    })
  }

  updateBookmark(btn:any): void {
    this.changed.emit(this.bookmarked = !this.bookmarked);
    this.choosenMovie = this.movies.find((movie:any)=>{
      return movie.title == btn.parentElement.parentElement.parentElement.children[2].textContent;
    })

    this.choosenMovie.isBookmarked = !this.choosenMovie.isBookmarked;

    if (this.choosenMovie.isBookmarked){ 
      this.data.addMovie(this.choosenMovie);
    }
    if (!this.choosenMovie.isBookmarked){
      this.data.removeMovie(this.choosenMovie)
    }
  }

}