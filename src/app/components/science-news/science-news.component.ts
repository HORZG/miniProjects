import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.css']
})
export class ScienceNewsComponent implements OnInit {
sciences  = [];
  constructor(private newApiService : NewsapiService) { }

  ngOnInit() {

    this.newApiService.sciNews().subscribe((data)=>{
this.sciences= data.articles
    })
  }


}
