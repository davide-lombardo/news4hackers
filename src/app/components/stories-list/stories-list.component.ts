import { Component, OnInit } from '@angular/core';
//import { Story } from '../../interfaces/hacker-news-api';

import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.css']
})
export class StoriesListComponent implements OnInit {

  stories!: any[];
  loading$ = this.loader.loading$;

  constructor(
    private httpService: HttpService,
    public loader: LoadingService,
  ) {}


  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.httpService.getStories().subscribe((response: any) => {
      this.stories = response;
    });
  }

}
