import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-reddit-list-item',
  templateUrl: './reddit-list-item.component.html',
  styleUrls: ['./reddit-list-item.component.scss']
})
export class RedditListItemComponent implements OnInit {

  @Input() title!: string;
  @Input() thumbnail!: string;
  @Input() thumbnailHeight!: number;
  @Input() thumbnailWidth!: number;
  @Input() subredditName!: string;
  
  constructor(
  ) { }

  ngOnInit(): void {
   
  }

  goToPost(){

  }

}
