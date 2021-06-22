import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.scss']
})
export class EditaccountComponent implements OnInit {

  currentUser!: User;
  currentIndex: number = -1;
  message: string = "";

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.userService.currentIndex.subscribe(value => this.currentIndex = value);
    this.userService.currentMessage.subscribe(message => this.message = message);
  }
  updateAccount(form : NgForm){
    this.userService.editUser(new User(form.value.account,this.currentUser.getEmail,form.value.fullName,this.currentUser.getPassword,form.value.phoneNumber,this.currentUser.getRole));
    this.route.navigate(['ITNews']);
  }


}
