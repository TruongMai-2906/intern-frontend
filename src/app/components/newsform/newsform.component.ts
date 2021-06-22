import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { generate } from 'rxjs';
import { News } from 'src/app/entity/news';
import { ItnewsService } from 'src/app/services/itnews.service';

@Component({
  selector: 'app-newsform',
  templateUrl: './newsform.component.html',
  styleUrls: ['./newsform.component.scss']
})
export class NewsformComponent implements OnInit {

  newsList!: Array<News>;
  constructor(private itNewsService:ItnewsService, private route:Router) { }

  ngOnInit(): void {
    this.itNewsService.currentNewsList.subscribe(value => this.newsList = value);
  }

  uploadNews(newsForm: NgForm){

    let data = newsForm.value;
    console.log(newsForm.value);

    let newsItem = new News(this.itNewsService.generateID(),data.author,data.title,data.description,data.content);
    console.log(newsItem);

    this.itNewsService.addNews(newsItem);

    this.route.navigate(['ITNews']);
  }



}
