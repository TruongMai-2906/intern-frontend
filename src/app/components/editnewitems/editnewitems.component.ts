import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/entity/news';
import { ItnewsService } from 'src/app/services/itnews.service';

@Component({
  selector: 'app-editnewitems',
  templateUrl: './editnewitems.component.html',
  styleUrls: ['./editnewitems.component.scss']
})
export class EditnewitemsComponent implements OnInit {

  newsList!: Array<News>;
  newsItem!: News;
  id!: string;
  constructor(private itNewsService:ItnewsService, private activedRoute:ActivatedRoute, private route: Router) {
    this.activedRoute.queryParams.subscribe(item => {
      console.log(item);
      this.id = item.id;
    });
   }

  ngOnInit(): void {
    this.itNewsService.currentNewsList.subscribe(value => this.newsList = value);
    this.itNewsService.currentNewsList.subscribe(value=>{
      this.newsList = value;
    })

    this.getItemDetail(this.id);
  }

  getItemDetail(id: string){
    this.newsList.forEach(value => {
      if (value.id === id) {
        this.newsItem = value;
      }
    });
    console.log(this.newsItem);

  }

  updateNews(newsForm: NgForm){
    let data = newsForm.value;

    let news = new News(this.id,data.author,data.title,data.description,data.content);
    this.itNewsService.updateNews(news,this.id);
    this.route.navigate(['/ITNews']);
  }

}
