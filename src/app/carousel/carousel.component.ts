import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

import { OwlOptions } from 'ngx-owl-carousel-o';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselsComponent implements OnInit {

  slides : any;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  constructor(
    private readonly http: HttpClient,
  ) {}

  ngOnInit() {
    this.fetch()
  }


  fetch() {
    this.slides = [
      {
          "id": 1,
          "name": "Licensed Frozen Hat",
          "description": "Incidunt et magni est ut.",
          "price": "170.00",
          "imageUrl": "/assets/1.jfif",
      },
      {
          "id": 2,
          "name": "Rustic Concrete Chicken",
          "description": "Sint libero mollitia.",
          "price": "302.00",
          "imageUrl": "/assets/2.jpg",
      },
      {
          "id": 3,
          "name": "Fantastic Metal Computer",
          "description": "In consequuntur cupiditate et unde minus.",
          "price": "279.00",
          "imageUrl": "/assets/3.jfif",
      },
      {
        "id": 3,
        "name": "Fantastic Metal Computer",
        "description": "In consequuntur cupiditate et unde minus.",
        "price": "279.00",
        "imageUrl": "/assets/4.jfif",
    }
  ];

  }

}
