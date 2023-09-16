import { Component, Input } from '@angular/core';
import { News } from 'src/main';

@Component({
  selector: 'small-news',
  templateUrl: './small-news.component.html',
  styleUrls: ['./small-news.component.css'],
})
export class SmallNewsComponent {
  @Input() news!: News;
  @Input() isCurrentNews!: boolean;
}
