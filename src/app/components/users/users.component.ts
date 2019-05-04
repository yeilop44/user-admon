import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { } from 'googlemaps';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  @ViewChild('search') searchElement: any;

  map: google.maps.Map;
  marker: any;

  users: any[] = [];
  constructor(private userService: UsersService) { }

  ngOnInit() {  
    this.getUsers();
    var searchBox = new google.maps.places.SearchBox(this.searchElement.nativeElement);
    google.maps.event.addListener(searchBox, 'places_changed', () => {
     var places = searchBox.getPlaces();
     console.log(places[0].formatted_address);
     console.log(places[0].geometry.location.lat());
     console.log(places[0].geometry.location.lng());
     this.userService.selectedUser.place = places[0].formatted_address;
     this.userService.selectedUser.positionLat = places[0].geometry.location.lat();
     this.userService.selectedUser.positionLng = places[0].geometry.location.lng();
    });
  }

  getUsers(){
    this.userService.getUsers()
      .subscribe((data:any) =>{
        this.users = data.Users;
        console.log(this.users);
    });
  }

  addUser(form: NgForm) {
    this.userService.postUser(form.value)
    .subscribe(res => {
    this.resetForm(form);
    console.log('User Saved');
    });
    this.getUsers();
  }

  //clean the form
  resetForm(form?: NgForm){
  	if(form){
  		form.reset();
  		this.userService.selectedUser = new User();
  	}
  }






}
