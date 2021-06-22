import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { News } from '../entity/news';

@Injectable({
  providedIn: 'root'
})
export class ItnewsService {

  a: News = new News("1","Truong Mai","Angular","Lorem Ipsum is simply dummy text of the printing","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  b: News = new News("2","Andy","ReactJS","Lorem Ipsum is simply dummy text of the printing","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  newsList: Array<News>=[
    this.a,
    this.b
  ]

  private newsListObserver = new BehaviorSubject<Array<News>>(this.newsList);

  currentNewsList = this.newsListObserver.asObservable();

  constructor() { }



  addNews(item:News){
    console.log("service:", item);

    this.newsList.push(item);
    console.log(this.newsList);

    this.newsListObserver.next(this.newsList);
    console.log(item.id, "is addded");
  }


  deleteNews(id: string){
    this.newsList.forEach((item,index) => {
      if (item.id === id) {
        console.log(item.id, "is removed");
        this.newsList.splice(index,1);
      }
    });
    this.newsListObserver.next(this.newsList);
  }

  updateNews(news: News, id: string){
    this.newsList.forEach((value,index) => {
      if (value.getId === id) {
        this.newsList[index] = news;
      }
    });
    this.newsListObserver.next(this.newsList);
  }

  generateID(){
    let newsListCopy = Object.assign(this.newsList);
    let lastItem = newsListCopy.pop();
    let id = "";
    try {
      id = lastItem.getId;
    } catch (error) {
      id = "0"
    }
    let number = parseInt(id!) + 1;
    console.log(typeof(lastItem));
    this.newsList.push(lastItem);
    return number+"";
  }

}
