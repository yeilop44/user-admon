import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((data:any) =>{
        this.users = data.Users;
        console.log(this.users);
      });
  }

  addUser(form: NgForm) {
    
       this.userService.postUser(form.value)
        .subscribe(res => {
        //this.resetForm(form);
        console.log('User Saved');
        this.userService.getUsers();
        
      });
   
  }





}
