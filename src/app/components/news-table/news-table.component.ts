import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.css']
})
export class NewsTableComponent implements OnInit {
  news =[
    {id : 1, title : 'promotion étè 2022', date : '10/07/2022' ,importance: "News" ,description :'la promotion de l année scolaire 2022 aura lien ne Juillet'},
    {id : 2, title : 'seminaire web dev', date :'30/05/2022' ,importance :'IMPORTANT' ,description :'à propos des nouveux framesworks '}
  ];    
  constructor() { }

  ngOnInit() {
  }

}
