import { Injectable, ViewChild, OnInit, ElementRef, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from '../models/user';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  @ViewChild('map') mapElement: any;
  @ViewChild('search') public searchElement: any;
  map: google.maps.Map;
  mapPro: google.maps.Map;
  marker: any;
  lat = 6.231928;
  lng = -75.60116719999996;
  places: any;
  bounds: any;
  searchBox: any;
    

  selectedUser: User;
  users: User[];

  urlApi = 'https://back-mpolitical.herokuapp.com/user';

  constructor(private http: HttpClient, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { 
    this.selectedUser = new User();
  }
  ngOnInit(){
    let mapProp = {
      center: new google.maps.LatLng(4.2223, -74.3333),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(this.mapElement.nativeElement, mapProp);

      var marker = new google.maps.Marker({
        position: {lat: 4.2223, lng: -74.3333},
        map: map,
        draggable: true
      });


      var searchBox = new google.maps.places.SearchBox(this.searchElement.nativeElement);
    
      google.maps.event.addListener(searchBox, 'places_changed', () => {
        var places = searchBox.getPlaces();
        var bounds = new google.maps.LatLngBounds();
        var i, place;
        console.log(places[0].formatted_address);
        console.log(places[0].geometry.location.lat());
        console.log(places[0].geometry.location.lng());
        var positionLat = places[0].geometry.location.lat();
        var positionLng = places[0].geometry.location.lng();
        

        console.log(bounds);
        /*for ( i = 0 ;  place = places[i]; i++) {
          bounds.extend(place.geometry.location);
          marker.setPosition(place.geometry.location);
        }*/

        bounds.extend(places[0].geometry.location);
        marker.setPosition(places[0].geometry.location);
        map.fitBounds(bounds);
        map.setZoom(14);  


      });
   
  }
 
  getUsers() {
    const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})};
    return this.http.get(this.urlApi, httpOptions);
  }

  postUser(User: User) {
    return this.http.post(`${this.urlApi}/signup`, User);
  }
  
 
}
