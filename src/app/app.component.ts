import { Component, OnInit, VERSION } from '@angular/core';

//Import the package, after installing
import { Statistics } from 'liviastatistics';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular ' + VERSION.major;
  r2calculated;

  //Create an instance
statistics = new Statistics();

ngOnInit(){
  //first is the real data, the second is the prediction
this.r2calculated= this.statistics.calculateR2([1, 2, 3], [0.9, 2.3, 3]);

}

}
