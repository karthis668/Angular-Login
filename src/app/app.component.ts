import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Asimplelogin';


  slide = [
    {
        "id": 1,
        "name": "Licensed Frozen Hat",
        "description": "Incidunt et magni est ut.",
        "price": "170.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product",
        "quantity": 56840
    },
    {
        "id": 2,
        "name": "Rustic Concrete Chicken",
        "description": "Sint libero mollitia.",
        "price": "302.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product",
        "quantity": 9358
    },
    {
        "id": 3,
        "name": "Fantastic Metal Computer",
        "description": "In consequuntur cupiditate et unde minus.",
        "price": "279.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product",
        "quantity": 90316
    }
];

}
