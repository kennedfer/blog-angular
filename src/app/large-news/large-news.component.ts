import { Component, Input } from '@angular/core';
import { News } from 'src/main';

@Component({
  selector: 'large-news',
  templateUrl: './large-news.component.html',
  styleUrls: ['./large-news.component.css']
})
export class LargeNewsComponent {
  @Input() news!:News ;
}
