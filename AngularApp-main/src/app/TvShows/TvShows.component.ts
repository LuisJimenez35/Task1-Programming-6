import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TVShowsService } from '../services/TvShows/TVShows.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './TV Shows.component.html',
  styleUrl: './TV Shows.component.css'
})
export class TVShowsComponent implements OnInit {

  TVShows: any;
  categoryTitle: any;
  pageCount: any;

  constructor(private TVShowsService: TVShowsService) {

  }

  ngOnInit(): void {
    this.TVShowsService.getTVShows()
      .subscribe(
        (data: any) => {
          this.TVShows = data.results;
          this.categoryTitle = data.name;
          this.pageCount = Array(data.total_pages).fill(1).map((x,i)=>i);
        }
      );
  }

  onPage(page: number){
    this.TVShowsService.getTvShowsPage(page)
      .subscribe(
        (data: any) => {
          this.TVShows = data.results;
          this.categoryTitle = data.name;
          this.pageCount = Array(data.total_pages).fill(1).map((x,i)=>i);
        }
      );
  }
}
