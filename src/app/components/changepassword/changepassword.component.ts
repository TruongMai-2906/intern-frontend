import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  currentUser!: User;
  currentIndex: number = -1;
  message: string = "";

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.userService.currentIndex.subscribe(value => this.currentIndex = value);
    this.userService.currentMessage.subscribe(message => this.message = message);
  }
  changePasswordAccount(form : NgForm){
    let oldPassWord = form.value.oldPassWord;
    let newPassWord = form.value.newPassWord;
    let retypePassWord = form.value.retypePassWord;

    console.log(newPassWord, retypePassWord, newPassWord === retypePassWord);


    if (oldPassWord === this.currentUser.getPassword) {
      if (newPassWord === retypePassWord) {
        this.userService.editUser(new User(this.currentUser.account,this.currentUser.getEmail,this.currentUser.fullName,retypePassWord,this.currentUser.phoneNumber,this.currentUser.role));
        this.route.navigate(['ITNews']);
      } else {
        this.route.navigate(['EditAccount']);
      }
    } else {
      this.route.navigate(['EditAccount']);
    }
  }
}
