import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../interfaces/hacker-news-api';

import * as moment from 'moment';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {

  @Input() story!: Story;

  constructor() { }

  ngOnInit() {}

  getTimePosted(timePosted: number): string {
    return moment.unix(timePosted).fromNow();
  }
}
