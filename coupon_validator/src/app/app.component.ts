import { Component,OnInit} from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'coupon_validator';
  constructor(private dataService: DataService){}
 
  ngOnInit(){
    // this.dataService.getData().subscribe((res)=>{
    //   console.log(res)
    // });
  }
}
