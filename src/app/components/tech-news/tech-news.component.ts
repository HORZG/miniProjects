import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {
technologies = [];
  constructor(private techApiService : NewsapiService) { }

  ngOnInit() {
    this.techApiService.techNews().subscribe((data)=>{
this.technologies= data.articles

    })
  }

}
