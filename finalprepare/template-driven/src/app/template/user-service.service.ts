import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserServiceService {

  constructor(public http:HttpClient) { }

  getUserData(){
  	return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }

}
