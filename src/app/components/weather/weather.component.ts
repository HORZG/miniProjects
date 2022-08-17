import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather : any = {};
  weatherForm : FormGroup;
  weatherRes : any = [{}];
  constructor(private useRService : userService) { }

  ngOnInit() {
  }


  search(){
    console.log('here weather for the city:', this.weather);
    this.useRService.searchWeather(this.weather).subscribe((data)=>
    {

      console.log('here weather', data.result);
      this.weatherRes = data.result;
      
    })


  }
}
