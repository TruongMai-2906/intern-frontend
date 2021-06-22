import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  message: string = "";

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userService.currentMessage.subscribe(message => this.message = message);
  }
  register(form : NgForm){
    this.userService.addUser(new User(form.value.account,form.value.email,form.value.fullName,form.value.password,form.value.phoneNumber,2));
    this.route.navigate(['Login']);
  }
}
