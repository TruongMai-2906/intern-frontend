import { Component, Input,Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/entity/news';
import { ItnewsService } from 'src/app/services/itnews.service';

@Component({
  selector: 'app-itnewsitems',
  templateUrl: './itnewsitems.component.html',
  styleUrls: ['./itnewsitems.component.scss']
})
export class ItnewsitemsComponent implements OnInit {

  newsList!: Array<News>;
  newsItem!: News;
  id!: string;

  constructor(private route:ActivatedRoute,private itNewServices:ItnewsService){
    this.route.queryParams.subscribe(item => {
      console.log(item);
      this.id = item.id;
    });

  }

  ngOnInit(): void {
    this.itNewServices.currentNewsList.subscribe(value=>{
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
  }

}
