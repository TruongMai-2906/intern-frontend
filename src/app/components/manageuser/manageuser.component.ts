import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {

  userList!: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUserList.subscribe(value => {
      this.userList = value;
    });
  }

  deleteUser(email: string){
    console.log(email);

    let user = new User("","","","","",2);
    this.userList.forEach(value => {
      console.log(value);
      console.log(value.getEmail);
      console.log(value.getEmail ===email);
      if (value.getEmail == email) {
        user = value;
        console.log("have");

      }
    });
    console.log(user);

    this.userService.removeUser(user);

  }

}
