import { Component, OnInit } from '@angular/core';
import { UserServiceService} from './user-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(public _service:UserServiceService) { }


  user = {
  	name:"Eta",
  	email:"ts.enkhtulga@gmail.com",
  	age:24,
  	password:"",
  	city:"Ulaanbaatar"
  }

  userjson = {
    username:"",
    website:""
  }

  genders = ['male','female'];

  onSubmit()
  {
  	console.log(this.user);
    this._service.getUserData().subscribe(
        data => {
            for(let key in data) {
              if(key ==="username") {this.userjson.username = data[key]; console.log(key);}
              if(key ==="website") {this.userjson.website = data[key]; console.log(key);}
              
            }
        }
      );
  }
  ngOnInit() {
  }

}
