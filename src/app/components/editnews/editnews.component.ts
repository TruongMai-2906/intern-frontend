import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/entity/news';
import { User } from 'src/app/entity/user';
import { ItnewsService } from 'src/app/services/itnews.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editnews',
  templateUrl: './editnews.component.html',
  styleUrls: ['./editnews.component.scss']
})
export class EditnewsComponent implements OnInit {

  newsList!: Array<News>;
  currentUser!: User;
  constructor(private itNewServices:ItnewsService,private userService : UserService, private route:Router) {
  }

  ngOnInit(): void {
    this.itNewServices.currentNewsList.subscribe(newsList => this.newsList = newsList);
    this.userService.currentUser.subscribe(user => this.currentUser = user);
  }

  deleteNews(id: string){
    this.itNewServices.deleteNews(id);
  }

}
