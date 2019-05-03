import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

import { AgmCoreModule } from '@agm/core';


import { UsersService } from './services/users.service'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC69lNgQw1tqaxwZb1NCgj1yn9fvQLMaNg',
      libraries: ['places']
    })
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
