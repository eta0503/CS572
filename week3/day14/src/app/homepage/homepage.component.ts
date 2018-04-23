import { Component, OnInit } from '@angular/core';
import {DbService} from "app/db.service";
import {ActivatedRoute} from "@angular/router";
import {ProfileGuard} from "app/profile.guard";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
