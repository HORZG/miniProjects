import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
news : any = [];
  constructor(private apiService : NewsapiService) { }

  ngOnInit() {
    this.apiService.news().subscribe((result)=>{
      console.log(result);
      this.news = result.articles
      
    })
  }

}
