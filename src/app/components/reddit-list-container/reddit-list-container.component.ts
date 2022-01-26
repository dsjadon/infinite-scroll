import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-reddit-list-container',
  templateUrl: './reddit-list-container.component.html',
  styleUrls: ['./reddit-list-container.component.scss']
})
export class RedditListContainerComponent implements OnInit, AfterViewInit {

  public itemList: any[] = [];

  @ViewChild('wrapper')
  wrapperElem!: ElementRef;

  constructor(
    private redditService: RedditService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(){
    //** can be used if scroll is within a container of relatively small height (then window)
    //** enable overflow -scroll in styles 

    //let elem = this.wrapperElem.nativeElement as HTMLElement;
    // elem.addEventListener('scroll', () => {
    //   if (elem.scrollTop + elem.clientHeight >= elem.scrollHeight) {
    //     this.loadData();
    //   } 
    // });

    /** when scroll is on whole page/document */
    let document = window.document.documentElement;
    window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight >= document.scrollHeight) {
          this.loadData();
        } 
    });
  }

  loadData(){
    this.redditService.getItems()
      .subscribe( (resp: any) => {
        this.itemList.splice(this.itemList.length, 0, ...resp.data.children);
        console.log(this.itemList);
      })
  }

}
