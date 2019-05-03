export class User {
    constructor (_id = '', userName='', password='', names='', surnames='', position='', place='',
                    positionLat=0, positionLng=0,) {
      this._id = _id;
      this.userName = userName;
      this.password = password;
      this.names = names;
      this.surnames = surnames;
      this.position= position;
      this.place= place;
      this.positionLat= positionLat;
      this.positionLng= positionLng;
      
      
     
  }
  
    _id: string;
    userName: string;
    password: string;
    names: string;
    surnames: string;
    position: string;
    place: string;
    positionLat: number;
    positionLng: number;
    
  }
  