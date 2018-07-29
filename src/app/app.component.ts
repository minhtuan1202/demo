import { Component } from '@angular/core';

import { NguCarousel, NguCarouselStore, NguCarouselService } from '@ngu/carousel';
export const LAYOUT_CONFIG = {
  c1: 100,
  c2: 50,
  c3: 100 / 3,
  c6: 100 / 6,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  readonly config = [
    {
      row: LAYOUT_CONFIG.c2,
      column: LAYOUT_CONFIG.c1,
      title: 'ToTal: 1',
      content: 'This is a long content. This is a long content. This is a long content'
    },
    {
      row: LAYOUT_CONFIG.c2,
      column: LAYOUT_CONFIG.c1,
      title: 'ToTal: 1',
      content: 'This is a long content. This is a long content. This is a long content'
    }
  ]

  readonly config1 = [
    {
      row: LAYOUT_CONFIG.c6,
      column: LAYOUT_CONFIG.c1,
      title: 'ToTal: 1',
      content: 'This is a long content',
      class: ''
    },
    {
      row: LAYOUT_CONFIG.c6,
      column: LAYOUT_CONFIG.c3,
      title: 'ToTal: 1',
      content: 'This is a long content. This is a long content. This is a long content'
    },
    {
      row: LAYOUT_CONFIG.c6,
      column: LAYOUT_CONFIG.c3,
      title: 'ToTal: 1',
      content: 'This is a long content. This is a long content. This is a long content'
    },
    {
      row: LAYOUT_CONFIG.c6,
      column: LAYOUT_CONFIG.c3,
      title: 'ToTal: 1',
      content: 'This is a long content. This is a long content. This is a long content'
    },
    {
      row: LAYOUT_CONFIG.c6,
      column: LAYOUT_CONFIG.c2,
      title: 'ToTal: 1',
      content: 'This is a long content. This is a long content. This is a long content'
    },
    {
      row: LAYOUT_CONFIG.c6,
      column: LAYOUT_CONFIG.c2,
      title: 'ToTal: 1',
      content: 'This is a long content. This is a long content. This is a long content'
    },
    // {
    //   row: LAYOUT_CONFIG.c2,
    //   column: LAYOUT_CONFIG.c1,
    //   title: 'ToTal: 1',
    //   content: 'This is a long content. This is a long content. This is a long content'
    // },
    // {
    //   row: LAYOUT_CONFIG.c2,
    //   column: LAYOUT_CONFIG.c1,
    //   title: 'ToTal: 1',
    //   content: 'This is a long content. This is a long content. This is a long content'
    // }

  ]

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;



  private carouselToken: string;

  public carouselTileItems: Array<any>;
  public carouselTile: NguCarousel;

  constructor(private carousel: NguCarouselService) {  }

  ngOnInit(){
    this.carouselTileItems = [0, 1, 2, 3, 4, 5];

    this.carouselTile = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true,
        pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngucarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 3,
      touch: true,
      easing: 'ease'
    };
    this.moveToSlide(4)
  }

  initDataFn(key: NguCarouselStore) {
    this.carouselToken = key.token;
  }

  resetFn() {
    this.carousel.reset(this.carouselToken);
  }

  moveToSlide(number) {
    this.carousel.moveToSlide(this.carouselToken, number, true);
  }

  // (carouselLoad)="carouselTileLoad($event)"
  public carouselTileLoad(evt: any) {
    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel


}
